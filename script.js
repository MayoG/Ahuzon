let episodes = [];

fetch('episodes.json')
  .then(response => response.json())
  .then(data => {
    episodes = data;
    renderEpisodes(episodes); // Make sure to call your rendering function here
  })
  .catch(error => {
    console.error('Failed to load episodes:', error);
  });

  
  // Render episodes on page load
  document.addEventListener('DOMContentLoaded', function() {
      renderEpisodes(episodes);
  });
  
  function renderEpisodes(episodes) {
    const episodesDiv = document.getElementById('episodes');
    episodesDiv.innerHTML = '';
    episodes.forEach((ep, idx) => {
        const epDiv = document.createElement('div');
        epDiv.className = 'episode';

        const header = document.createElement('div');
        header.className = 'episode-header';
        header.textContent = ep.name;
        header.addEventListener('click', () => {
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });

        const content = document.createElement('div');
        content.className = 'episode-content';

        if (ep.questions.length === 0) {
            const emptyMsg = document.createElement('div');
            emptyMsg.textContent = 'No questions found for this episode.';
            content.appendChild(emptyMsg);
        } else {
            ep.questions.forEach((q, qIdx) => {
                const qDiv = document.createElement('div');
                qDiv.className = 'question';

                // Center layout
                qDiv.style.flexDirection = 'column';
                qDiv.style.alignItems = 'center';

                // Image(s)
                const imgContainer = document.createElement('div');
                imgContainer.className = 'question-img-container';
                
                if (Array.isArray(q.imgSrc)) {
                    q.imgSrc.forEach((src, idx) => {
                        const img = document.createElement('img');
                        img.src = src;
                        img.alt = `Question ${qIdx + 1} Image ${idx + 1}`;
                        img.loading = 'lazy';
                        img.classList.add('question-img');
                        img.addEventListener('click', function() {
                            img.classList.toggle('zoomed');
                            // Overlay logic
                            if (img.classList.contains('zoomed')) {
                                showImageOverlay(img.src, img.alt, img);
                            }
                        });
                        imgContainer.appendChild(img);
                    });
                } else {
                    const img = document.createElement('img');
                    img.src = q.imgSrc;
                    img.alt = `Question ${qIdx + 1}`;
                    img.loading = 'lazy';
                    img.classList.add('question-img');
                    img.addEventListener('click', function() {
                        img.classList.toggle('zoomed');
                        // Overlay logic
                        if (img.classList.contains('zoomed')) {
                            showImageOverlay(img.src, img.alt, img);
                        }
                    });
                    imgContainer.appendChild(img);
                }
                
                qDiv.appendChild(imgContainer);

                // Show Answer Button
                const btn = document.createElement('button');
                btn.className = 'show-answer-btn';
                btn.textContent = 'הצג תשובה';
                btn.addEventListener('click', function() {
                    const isShown = answerDiv.style.display === 'block';
                    answerDiv.style.display = isShown ? 'none' : 'block';
                    btn.textContent = isShown ? 'הצג תשובה' : 'הסתר תשובה';
                });

                // Answer
                const answerDiv = document.createElement('span');
                answerDiv.className = 'answer';
                if (q.answer && typeof q.answer === 'object' && q.answer.img) {
                    // Answer is an image
                    const ansImg = document.createElement('img');
                    ansImg.src = q.answer.img;
                    ansImg.alt = 'תשובה';
                    ansImg.className = 'answer-img';
                    ansImg.style.cursor = 'zoom-in';
                    ansImg.addEventListener('click', function() {
                        ansImg.classList.toggle('zoomed');
                        if (ansImg.classList.contains('zoomed')) {
                            showImageOverlay(ansImg.src, ansImg.alt, ansImg);
                        }
                    });
                    answerDiv.appendChild(ansImg);
                } else {
                    // Answer is text (or missing)
                    answerDiv.textContent = q.answer ? q.answer : '(התשובה תוצג כאן)';
                }
                answerDiv.style.display = 'none';

                qDiv.appendChild(btn);
                qDiv.appendChild(answerDiv);
                content.appendChild(qDiv);
            });
        }

        epDiv.appendChild(header);
        epDiv.appendChild(content);
        episodesDiv.appendChild(epDiv);
    });
}

// Overlay for zoomed images
function showImageOverlay(src, alt, imgElement) {
    if (document.getElementById('img-overlay')) return; // Only one overlay at a time
    const overlay = document.createElement('div');
    overlay.id = 'img-overlay';
    overlay.className = 'img-overlay';
    overlay.addEventListener('click', function() {
        overlay.remove();
        imgElement.classList.remove('zoomed');
    });

    const bigImg = document.createElement('img');
    bigImg.src = src;
    bigImg.alt = alt;
    bigImg.className = 'zoomed-img';
    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);
}