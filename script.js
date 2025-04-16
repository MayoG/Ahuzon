// --- Extraction script to run in console of messages.html for the episodes
// (function() {
//     const messages = Array.from(document.querySelectorAll('.message'));
//     let episodes = [];
//     let currentEpisode = null;

//     messages.forEach(msg => {
//         const textDiv = msg.querySelector('.text');
//         if (textDiv && textDiv.textContent.trim()) {
//             // New episode
//             currentEpisode = {
//                 name: textDiv.textContent.trim(),
//                 questions: []
//             };
//             episodes.push(currentEpisode);
//         }
//         const imgs = msg.querySelectorAll('a.photo_wrap');
//         imgs.forEach(a => {
//             const imgSrc = a.getAttribute('href');
//             if (currentEpisode && imgSrc) {
//                 currentEpisode.questions.push({
//                     imgSrc: imgSrc,
//                     answer: null // Placeholder for future answer
//                 });
//             }
//         });
//     });

//     // Output as JSON for easy copy-paste
//     console.log(JSON.stringify(episodes, null, 2));
// })();



// ======= Paste your extracted episodes JSON below =======
const episodes = [
    {
      "name": "עונה 1 פרק 1",
      "questions": [
        {
          "imgSrc": "images/1_1-90.jpg",
          "answer": "תשובה ג - פסל החירות ועזריאלי לא נמצאים אחד ליד השני"
        },
        {
          "imgSrc": "images/1_1-80.jpg",
          "answer": {
            "img": "images/1_1-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_1-70.jpg",
          "answer": {
            "img": "images/1_1-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_1-60.jpg",
          "answer": {
            "img": "images/1_1-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_1-50.jpg",
          "answer": {
            "img": "images/1_1-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_1-40.jpg",
          "answer": {
            "img": "images/1_1-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_1-35.jpg",
          "answer": {
            "img": "images/1_1-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_1-30.jpg",
          "answer": {
            "img": "images/1_1-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_1-25.jpg",
          "answer": {
            "img": "images/1_1-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_1-20.jpg",
          "answer": {
            "img": "images/1_1-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_1-15.jpg",
          "answer": {
            "img": "images/1_1-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_1-10.jpg",
          "answer": {
            "img": "images/1_1-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_1-5.jpg",
          "answer": {
            "img": "images/1_1-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_1-1.jpg",
          "answer": {
            "img": "images/1_1-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 2",
      "questions": [
        {
          "imgSrc": "images/1_2-90.jpg",
          "answer": {
            "img": "images/1_2-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-80.jpg",
          "answer": {
            "img": "images/1_2-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-70.jpg",
          "answer": {
            "img": "images/1_2-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-60.jpg",
          "answer": {
            "img": "images/1_2-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-50.jpg",
          "answer": {
            "img": "images/1_2-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-40.jpg",
          "answer": {
            "img": "images/1_2-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-35.jpg",
          "answer": {
            "img": "images/1_2-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-30.jpg",
          "answer": {
            "img": "images/1_2-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-25.jpg",
          "answer": {
            "img": "images/1_2-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-20.jpg",
          "answer": {
            "img": "images/1_2-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-15.jpg",
          "answer": {
            "img": "images/1_2-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-10.jpg",
          "answer": {
            "img": "images/1_2-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-5.jpg",
          "answer": {
            "img": "images/1_2-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_2-1.jpg",
          "answer": {
            "img": "images/1_2-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 3",
      "questions": [
        {
          "imgSrc": "images/1_3-90.jpg",
          "answer": {
            "img": "images/1_3-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-80.jpg",
          "answer": {
            "img": "images/1_3-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-70.jpg",
          "answer": {
            "img": "images/1_3-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-60.jpg",
          "answer": {
            "img": "images/1_3-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-50.jpg",
          "answer": {
            "img": "images/1_3-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-40.jpg",
          "answer": {
            "img": "images/1_3-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-35.jpg",
          "answer": {
            "img": "images/1_3-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-30.jpg",
          "answer": {
            "img": "images/1_3-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-25.jpg",
          "answer": {
            "img": "images/1_3-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-20.jpg",
          "answer": {
            "img": "images/1_3-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-15.jpg",
          "answer": {
            "img": "images/1_3-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-10.jpg",
          "answer": {
            "img": "images/1_3-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-5.jpg",
          "answer": {
            "img": "images/1_3-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_3-1.jpg",
          "answer": {
            "img": "images/1_3-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 4 - סיישל מונדיאל",
      "questions": [
        {
          "imgSrc": "images/1_4-90.jpg",
          "answer": {
            "img": "images/1_4-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-80.jpg",
          "answer": {
            "img": "images/1_4-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-70.jpg",
          "answer": {
            "img": "images/1_4-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-60.jpg",
          "answer": {
            "img": "images/1_4-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-50.jpg",
          "answer": {
            "img": "images/1_4-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-40.jpg",
          "answer": {
            "img": "images/1_4-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-35.jpg",
          "answer": {
            "img": "images/1_4-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-30.jpg",
          "answer": {
            "img": "images/1_4-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-25.jpg",
          "answer": {
            "img": "images/1_4-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-20.jpg",
          "answer": {
            "img": "images/1_4-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-15.jpg",
          "answer": {
            "img": "images/1_4-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-10.jpg",
          "answer": {
            "img": "images/1_4-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-5.jpg",
          "answer": {
            "img": "images/1_4-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_4-1.jpg",
          "answer": {
            "img": "images/1_4-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 5",
      "questions": [
        {
          "imgSrc": "images/1_5-90.jpg",
          "answer": {
            "img": "images/1_5-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-80.jpg",
          "answer": {
            "img": "images/1_5-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-70.jpg",
          "answer": {
            "img": "images/1_5-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-60.jpg",
          "answer": {
            "img": "images/1_5-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-50.jpg",
          "answer": {
            "img": "images/1_5-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-40.jpg",
          "answer": {
            "img": "images/1_5-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-35.jpg",
          "answer": {
            "img": "images/1_5-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-30.jpg",
          "answer": {
            "img": "images/1_5-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-25.jpg",
          "answer": {
            "img": "images/1_5-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-20.jpg",
          "answer": {
            "img": "images/1_5-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-15.jpg",
          "answer": {
            "img": "images/1_5-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-10.jpg",
          "answer": {
            "img": "images/1_5-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-5.jpg",
          "answer": {
            "img": "images/1_5-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_5-1.jpg",
          "answer": {
            "img": "images/1_5-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 6",
      "questions": [
        {
          "imgSrc": "images/1_6-90.jpg",
          "answer": {
            "img": "images/1_6-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_6-80.jpg",
          "answer": {
            "img": "images/1_6-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_6-70.jpg",
          "answer": {
            "img": "images/1_6-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_6-60.jpg",
          "answer": {
            "img": "images/1_6-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_6-50.jpg",
          "answer": {
            "img": "images/1_6-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_6-40.jpg",
          "answer": {
            "img": "images/1_6-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_6-35.jpg",
          "answer": {
            "img": "images/1_6-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_6-30.jpg",
          "answer": {
            "img": "images/1_6-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_6-25.jpg",
          "answer": {
            "img": "images/1_6-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_6-20.jpg",
          "answer": {
            "img": "images/1_6-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_6-15.jpg",
          "answer": {
            "img": "images/1_6-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_6-10.jpg",
          "answer": {
            "img": "images/1_6-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_6-5.jpg",
          "answer": {
            "img": "images/1_6-5-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 7",
      "questions": [
        {
          "imgSrc": "images/1_7-90.jpg",
          "answer": {
            "img": "images/1_7-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_7-80.jpg",
          "answer": {
            "img": "images/1_7-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_7-70.jpg",
          "answer": {
            "img": "images/1_7-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_7-60.jpg",
          "answer": {
            "img": "images/1_7-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_7-50.jpg",
          "answer": {
            "img": "images/1_7-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_7-40.jpg",
          "answer": {
            "img": "images/1_7-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_7-35.jpg",
          "answer": {
            "img": "images/1_7-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_7-30.jpg",
          "answer": {
            "img": "images/1_7-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_7-25.jpg",
          "answer": {
            "img": "images/1_7-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_7-20.jpg",
          "answer": {
            "img": "images/1_7-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_7-15.jpg",
          "answer": {
            "img": "images/1_7-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_7-10.jpg",
          "answer": {
            "img": "images/1_7-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_7-5.jpg",
          "answer": {
            "img": "images/1_7-5-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 8",
      "questions": [
        {
          "imgSrc": "images/1_8-90.jpg",
          "answer": {
            "img": "images/1_8-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_8-80.jpg",
          "answer": {
            "img": "images/1_8-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_8-70.jpg",
          "answer": {
            "img": "images/1_8-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_8-60.jpg",
          "answer": {
            "img": "images/1_8-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_8-50.jpg",
          "answer": {
            "img": "images/1_8-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_8-40.jpg",
          "answer": {
            "img": "images/1_8-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_8-35.jpg",
          "answer": {
            "img": "images/1_8-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_8-30.jpg",
          "answer": {
            "img": "images/1_8-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_8-25.jpg",
          "answer": {
            "img": "images/1_8-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_8-20.jpg",
          "answer": {
            "img": "images/1_8-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_8-15.jpg",
          "answer": {
            "img": "images/1_8-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_8-10.jpg",
          "answer": {
            "img": "images/1_8-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_8-5.jpg",
          "answer": {
            "img": "images/1_8-5-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 9",
      "questions": [
        {
          "imgSrc": "images/1_9-90.jpg",
          "answer": {
            "img": "images/1_9-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-80.jpg",
          "answer": {
            "img": "images/1_9-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-70.jpg",
          "answer": {
            "img": "images/1_9-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-60.jpg",
          "answer": {
            "img": "images/1_9-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-50.jpg",
          "answer": {
            "img": "images/1_9-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-40.jpg",
          "answer": {
            "img": "images/1_9-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-35.jpg",
          "answer": {
            "img": "images/1_9-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-30.jpg",
          "answer": {
            "img": "images/1_9-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-25.jpg",
          "answer": {
            "img": "images/1_9-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-20.jpg",
          "answer": {
            "img": "images/1_9-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-15.jpg",
          "answer": {
            "img": "images/1_9-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-10.jpg",
          "answer": {
            "img": "images/1_9-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-5.jpg",
          "answer": {
            "img": "images/1_9-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_9-1.jpg",
          "answer": {
            "img": "images/1_9-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 10",
      "questions": [
        {
          "imgSrc": "images/1_10-90.jpg",
          "answer": {
            "img": "images/1_10-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-80.jpg",
          "answer": {
            "img": "images/1_10-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-70.jpg",
          "answer": {
            "img": "images/1_10-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-60.jpg",
          "answer": {
            "img": "images/1_10-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-50.jpg",
          "answer": {
            "img": "images/1_10-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-40.jpg",
          "answer": {
            "img": "images/1_10-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-35.jpg",
          "answer": {
            "img": "images/1_10-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-30.jpg",
          "answer": {
            "img": "images/1_10-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-25.jpg",
          "answer": {
            "img": "images/1_10-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-20.jpg",
          "answer": {
            "img": "images/1_10-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-15.jpg",
          "answer": {
            "img": "images/1_10-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-10.jpg",
          "answer": {
            "img": "images/1_10-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-5.jpg",
          "answer": {
            "img": "images/1_10-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_10-1.jpg",
          "answer": {
            "img": "images/1_10-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 11",
      "questions": [
        {
          "imgSrc": "images/1_11-90.jpg",
          "answer": {
            "img": "images/1_11-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-80.jpg",
          "answer": {
            "img": "images/1_11-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-70.jpg",
          "answer": {
            "img": "images/1_11-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-60.jpg",
          "answer": {
            "img": "images/1_11-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-50.jpg",
          "answer": {
            "img": "images/1_11-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-40.jpg",
          "answer": {
            "img": "images/1_11-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-35.jpg",
          "answer": {
            "img": "images/1_11-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-30.jpg",
          "answer": {
            "img": "images/1_11-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-25.jpg",
          "answer": {
            "img": "images/1_11-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-20.jpg",
          "answer": {
            "img": "images/1_11-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-15.jpg",
          "answer": {
            "img": "images/1_11-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-10.jpg",
          "answer": {
            "img": "images/1_11-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-5.jpg",
          "answer": {
            "img": "images/1_11-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_11-1.jpg",
          "answer": {
            "img": "images/1_11-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 12",
      "questions": [
        {
          "imgSrc": "images/1_12-90.jpg",
          "answer": {
            "img": "images/1_12-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-80.jpg",
          "answer": {
            "img": "images/1_12-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-70.jpg",
          "answer": {
            "img": "images/1_12-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-60.jpg",
          "answer": {
            "img": "images/1_12-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-50.jpg",
          "answer": {
            "img": "images/1_12-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-40.jpg",
          "answer": {
            "img": "images/1_12-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-35.jpg",
          "answer": {
            "img": "images/1_12-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-30.jpg",
          "answer": {
            "img": "images/1_12-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-25.jpg",
          "answer": {
            "img": "images/1_12-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-20.jpg",
          "answer": {
            "img": "images/1_12-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-15.jpg",
          "answer": {
            "img": "images/1_12-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-10.jpg",
          "answer": {
            "img": "images/1_12-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-5.jpg",
          "answer": {
            "img": "images/1_12-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_12-1.jpg",
          "answer": {
            "img": "images/1_12-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 13",
      "questions": [
        {
          "imgSrc": "images/1_13-90.jpg",
          "answer": {
            "img": "images/1_13-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-80.jpg",
          "answer": {
            "img": "images/1_13-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-70.jpg",
          "answer": {
            "img": "images/1_13-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-60.jpg",
          "answer": {
            "img": "images/1_13-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-50.jpg",
          "answer": {
            "img": "images/1_13-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-40.jpg",
          "answer": {
            "img": "images/1_13-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-35.jpg",
          "answer": {
            "img": "images/1_13-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-30.jpg",
          "answer": {
            "img": "images/1_13-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-25.jpg",
          "answer": {
            "img": "images/1_13-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-20.jpg",
          "answer": {
            "img": "images/1_13-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-15.jpg",
          "answer": {
            "img": "images/1_13-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-10.jpg",
          "answer": {
            "img": "images/1_13-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-5.jpg",
          "answer": {
            "img": "images/1_13-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_13-1.jpg",
          "answer": {
            "img": "images/1_13-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 14",
      "questions": [
        {
          "imgSrc": "images/1_14-90.jpg",
          "answer": {
            "img": "images/1_14-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-80.jpg",
          "answer": {
            "img": "images/1_14-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-70.jpg",
          "answer": {
            "img": "images/1_14-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-60.jpg",
          "answer": {
            "img": "images/1_14-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-50.jpg",
          "answer": {
            "img": "images/1_14-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-40.jpg",
          "answer": {
            "img": "images/1_14-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-35.jpg",
          "answer": {
            "img": "images/1_14-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-30.jpg",
          "answer": {
            "img": "images/1_14-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-25.jpg",
          "answer": {
            "img": "images/1_14-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-20.jpg",
          "answer": {
            "img": "images/1_14-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-15.jpg",
          "answer": {
            "img": "images/1_14-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-10.jpg",
          "answer": {
            "img": "images/1_14-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-5.jpg",
          "answer": {
            "img": "images/1_14-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_14-1.jpg",
          "answer": {
            "img": "images/1_14-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 15 - ספיישל ילדים",
      "questions": [
        {
          "imgSrc": "images/1_15-90.jpg",
          "answer": {
            "img": "images/1_15-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_15-80.jpg",
          "answer": {
            "img": "images/1_15-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_15-70.jpg",
          "answer": {
            "img": "images/1_15-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_15-60.jpg",
          "answer": {
            "img": "images/1_15-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_15-50.jpg",
          "answer": {
            "img": "images/1_15-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_15-40.jpg",
          "answer": {
            "img": "images/1_15-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_15-35.jpg",
          "answer": {
            "img": "images/1_15-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_15-30.jpg",
          "answer": {
            "img": "images/1_15-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_15-25.jpg",
          "answer": {
            "img": "images/1_15-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_15-20.jpg",
          "answer": {
            "img": "images/1_15-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_15-15.jpg",
          "answer": {
            "img": "images/1_15-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_15-10.jpg",
          "answer": {
            "img": "images/1_15-10-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 1 פרק 16 (אחרון לעונה)",
      "questions": [
        {
          "imgSrc": "images/1_16-90.jpg",
          "answer": {
            "img": "images/1_16-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-80.jpg",
          "answer": {
            "img": "images/1_16-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-70.jpg",
          "answer": {
            "img": "images/1_16-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-60.jpg",
          "answer": {
            "img": "images/1_16-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-50.jpg",
          "answer": {
            "img": "images/1_16-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-40.jpg",
          "answer": {
            "img": "images/1_16-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-35.jpg",
          "answer": {
            "img": "images/1_16-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-30.jpg",
          "answer": {
            "img": "images/1_16-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-25.jpg",
          "answer": {
            "img": "images/1_16-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-20.jpg",
          "answer": {
            "img": "images/1_16-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-15.jpg",
          "answer": {
            "img": "images/1_16-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-10.jpg",
          "answer": {
            "img": "images/1_16-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-5.jpg",
          "answer": {
            "img": "images/1_16-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/1_16-1.jpg",
          "answer": {
            "img": "images/1_16-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 1",
      "questions": [
        {
          "imgSrc": "images/2_1-90.jpg",
          "answer": {
            "img": "images/2_1-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-80.jpg",
          "answer": {
            "img": "images/2_1-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-70.jpg",
          "answer": {
            "img": "images/2_1-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-60.jpg",
          "answer": {
            "img": "images/2_1-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-50.jpg",
          "answer": {
            "img": "images/2_1-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-40.jpg",
          "answer": {
            "img": "images/2_1-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-35.jpg",
          "answer": {
            "img": "images/2_1-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-30.jpg",
          "answer": {
            "img": "images/2_1-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-25.jpg",
          "answer": {
            "img": "images/2_1-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-20.jpg",
          "answer": {
            "img": "images/2_1-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-15.jpg",
          "answer": {
            "img": "images/2_1-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-10.jpg",
          "answer": {
            "img": "images/2_1-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-5.jpg",
          "answer": {
            "img": "images/2_1-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_1-1.jpg",
          "answer": {
            "img": "images/2_1-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 2",
      "questions": [
        {
          "imgSrc": "images/2_2-90.jpg",
          "answer": {
            "img": "images/2_2-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-80.jpg",
          "answer": {
            "img": "images/2_2-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-70.jpg",
          "answer": {
            "img": "images/2_2-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-60.jpg",
          "answer": {
            "img": "images/2_2-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-50.jpg",
          "answer": {
            "img": "images/2_2-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-40.jpg",
          "answer": {
            "img": "images/2_2-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-35.jpg",
          "answer": {
            "img": "images/2_2-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-30.jpg",
          "answer": {
            "img": "images/2_2-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-25.jpg",
          "answer": {
            "img": "images/2_2-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-20.jpg",
          "answer": {
            "img": "images/2_2-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-15.jpg",
          "answer": {
            "img": "images/2_2-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-10.jpg",
          "answer": {
            "img": "images/2_2-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-5.jpg",
          "answer": {
            "img": "images/2_2-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_2-1.jpg",
          "answer": {
            "img": "images/2_2-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 3 - ספיישל נשים",
      "questions": [
        {
          "imgSrc": "images/2_3-90.jpg",
          "answer": {
            "img": "images/2_3-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-80.jpg",
          "answer": {
            "img": "images/2_3-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-70.jpg",
          "answer": {
            "img": "images/2_3-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-60.jpg",
          "answer": {
            "img": "images/2_3-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-50.jpg",
          "answer": {
            "img": "images/2_3-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-40.jpg",
          "answer": {
            "img": "images/2_3-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-35.jpg",
          "answer": {
            "img": "images/2_3-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-30.jpg",
          "answer": {
            "img": "images/2_3-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-25.jpg",
          "answer": {
            "img": "images/2_3-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-20.jpg",
          "answer": {
            "img": "images/2_3-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-15.jpg",
          "answer": {
            "img": "images/2_3-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-10.jpg",
          "answer": {
            "img": "images/2_3-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-5.jpg",
          "answer": {
            "img": "images/2_3-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-1.jpg",
          "answer": {
            "img": "images/2_3-1-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_3-0.jpg",
          "answer": {
            "img": "images/2_3-0-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 4",
      "questions": [
        {
          "imgSrc": "images/2_4-90.jpg",
          "answer": {
            "img": "images/2_4-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_4-80.jpg",
          "answer": {
            "img": "images/2_4-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_4-70.jpg",
          "answer": {
            "img": "images/2_4-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_4-60.jpg",
          "answer": {
            "img": "images/2_4-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_4-50.jpg",
          "answer": {
            "img": "images/2_4-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_4-40.jpg",
          "answer": {
            "img": "images/2_4-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_4-35.jpg",
          "answer": {
            "img": "images/2_4-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_4-30.jpg",
          "answer": {
            "img": "images/2_4-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_4-25.jpg",
          "answer": {
            "img": "images/2_4-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_4-20.jpg",
          "answer": {
            "img": "images/2_4-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_4-15.jpg",
          "answer": {
            "img": "images/2_4-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_4-10.jpg",
          "answer": {
            "img": "images/2_4-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_4-5.jpg",
          "answer": {
            "img": "images/2_4-5-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 5 - ספיישל פורים",
      "questions": [
        {
          "imgSrc": "images/2_5-90.jpg",
          "answer": {
            "img": "images/2_5-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-80.jpg",
          "answer": {
            "img": "images/2_5-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-70.jpg",
          "answer": {
            "img": "images/2_5-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-60.jpg",
          "answer": {
            "img": "images/2_5-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-50.jpg",
          "answer": {
            "img": "images/2_5-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-40.jpg",
          "answer": {
            "img": "images/2_5-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-35.jpg",
          "answer": {
            "img": "images/2_5-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-30.jpg",
          "answer": {
            "img": "images/2_5-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-25.jpg",
          "answer": {
            "img": "images/2_5-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-20.jpg",
          "answer": {
            "img": "images/2_5-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-15.jpg",
          "answer": {
            "img": "images/2_5-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-10.jpg",
          "answer": {
            "img": "images/2_5-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-5.jpg",
          "answer": {
            "img": "images/2_5-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_5-1.jpg",
          "answer": {
            "img": "images/2_5-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 6",
      "questions": [
        {
          "imgSrc": "images/2_6-90.jpg",
          "answer": {
            "img": "images/2_6-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-80.jpg",
          "answer": {
            "img": "images/2_6-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-70.jpg",
          "answer": {
            "img": "images/2_6-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-60.jpg",
          "answer": {
            "img": "images/2_6-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-50.jpg",
          "answer": {
            "img": "images/2_6-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-40.jpg",
          "answer": {
            "img": "images/2_6-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-35.jpg",
          "answer": {
            "img": "images/2_6-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-30.jpg",
          "answer": {
            "img": "images/2_6-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-25.jpg",
          "answer": {
            "img": "images/2_6-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-20.jpg",
          "answer": {
            "img": "images/2_6-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-15.jpg",
          "answer": {
            "img": "images/2_6-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-10.jpg",
          "answer": {
            "img": "images/2_6-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-5.jpg",
          "answer": {
            "img": "images/2_6-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_6-1.jpg",
          "answer": {
            "img": "images/2_6-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 7",
      "questions": [
        {
          "imgSrc": "images/2_7-90.jpg",
          "answer": {
            "img": "images/2_7-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-80.jpg",
          "answer": {
            "img": "images/2_7-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-70.jpg",
          "answer": {
            "img": "images/2_7-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-60.jpg",
          "answer": {
            "img": "images/2_7-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-50.jpg",
          "answer": {
            "img": "images/2_7-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-40.jpg",
          "answer": {
            "img": "images/2_7-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-35.jpg",
          "answer": {
            "img": "images/2_7-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-30.jpg",
          "answer": {
            "img": "images/2_7-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-25.jpg",
          "answer": {
            "img": "images/2_7-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-20.jpg",
          "answer": {
            "img": "images/2_7-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-15.jpg",
          "answer": {
            "img": "images/2_7-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-10.jpg",
          "answer": {
            "img": "images/2_7-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-5.jpg",
          "answer": {
            "img": "images/2_7-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_7-1.jpg",
          "answer": {
            "img": "images/2_7-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 8",
      "questions": [
        {
          "imgSrc": "images/2_8-90.jpg",
          "answer": {
            "img": "images/2_8-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-80.jpg",
          "answer": {
            "img": "images/2_8-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-70.jpg",
          "answer": {
            "img": "images/2_8-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-60.jpg",
          "answer": {
            "img": "images/2_8-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-50.jpg",
          "answer": {
            "img": "images/2_8-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-40.jpg",
          "answer": {
            "img": "images/2_8-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-35.jpg",
          "answer": {
            "img": "images/2_8-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-30.jpg",
          "answer": {
            "img": "images/2_8-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-25.jpg",
          "answer": {
            "img": "images/2_8-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-20.jpg",
          "answer": {
            "img": "images/2_8-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-15.jpg",
          "answer": {
            "img": "images/2_8-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-10.jpg",
          "answer": {
            "img": "images/2_8-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-5.jpg",
          "answer": {
            "img": "images/2_8-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_8-1.jpg",
          "answer": {
            "img": "images/2_8-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 9 - ספיישל רווקים",
      "questions": [
        {
          "imgSrc": "images/2_9-90.jpg",
          "answer": {
            "img": "images/2_9-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-80.jpg",
          "answer": {
            "img": "images/2_9-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-70.jpg",
          "answer": {
            "img": "images/2_9-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-60.jpg",
          "answer": {
            "img": "images/2_9-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-50.jpg",
          "answer": {
            "img": "images/2_9-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-40.jpg",
          "answer": {
            "img": "images/2_9-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-35.jpg",
          "answer": {
            "img": "images/2_9-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-30.jpg",
          "answer": {
            "img": "images/2_9-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-25.jpg",
          "answer": {
            "img": "images/2_9-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-20.jpg",
          "answer": {
            "img": "images/2_9-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-15.jpg",
          "answer": {
            "img": "images/2_9-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-10.jpg",
          "answer": {
            "img": "images/2_9-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-5.jpg",
          "answer": {
            "img": "images/2_9-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_9-1.jpg",
          "answer": {
            "img": "images/2_9-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 10",
      "questions": [
        {
          "imgSrc": "images/2_10-90.jpg",
          "answer": {
            "img": "images/2_10-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-80.jpg",
          "answer": {
            "img": "images/2_10-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-70.jpg",
          "answer": {
            "img": "images/2_10-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-60.jpg",
          "answer": {
            "img": "images/2_10-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-50.jpg",
          "answer": {
            "img": "images/2_10-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-40.jpg",
          "answer": {
            "img": "images/2_10-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-35.jpg",
          "answer": {
            "img": "images/2_10-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-30.jpg",
          "answer": {
            "img": "images/2_10-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-25.jpg",
          "answer": {
            "img": "images/2_10-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-20.jpg",
          "answer": {
            "img": "images/2_10-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-15.jpg",
          "answer": {
            "img": "images/2_10-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-10.jpg",
          "answer": {
            "img": "images/2_10-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-5.jpg",
          "answer": {
            "img": "images/2_10-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_10-1.jpg",
          "answer": {
            "img": "images/2_10-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 11",
      "questions": [
        {
          "imgSrc": "images/2_11-90.jpg",
          "answer": {
            "img": "images/2_11-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_11-80.jpg",
          "answer": {
            "img": "images/2_11-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_11-70.jpg",
          "answer": {
            "img": "images/2_11-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_11-60.jpg",
          "answer": {
            "img": "images/2_11-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_11-50.jpg",
          "answer": {
            "img": "images/2_11-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_11-40.jpg",
          "answer": {
            "img": "images/2_11-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_11-35.jpg",
          "answer": {
            "img": "images/2_11-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_11-30.jpg",
          "answer": {
            "img": "images/2_11-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_11-25.jpg",
          "answer": {
            "img": "images/2_11-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_11-20.jpg",
          "answer": {
            "img": "images/2_11-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_11-15.jpg",
          "answer": {
            "img": "images/2_11-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_11-10.jpg",
          "answer": {
            "img": "images/2_11-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_11-5.jpg",
          "answer": {
            "img": "images/2_11-5-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 12 - ספיישל העצמאות",
      "questions": [
        {
          "imgSrc": "images/2_12-90.jpg",
          "answer": {
            "img": "images/2_12-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-80.jpg",
          "answer": {
            "img": "images/2_12-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-70.jpg",
          "answer": {
            "img": "images/2_12-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-60.jpg",
          "answer": {
            "img": "images/2_12-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-50.jpg",
          "answer": {
            "img": "images/2_12-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-40.jpg",
          "answer": {
            "img": "images/2_12-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-35.jpg",
          "answer": {
            "img": "images/2_12-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-30.jpg",
          "answer": {
            "img": "images/2_12-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-25.jpg",
          "answer": {
            "img": "images/2_12-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-20.jpg",
          "answer": {
            "img": "images/2_12-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-15.jpg",
          "answer": {
            "img": "images/2_12-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-10.jpg",
          "answer": {
            "img": "images/2_12-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-5.jpg",
          "answer": {
            "img": "images/2_12-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_12-1.jpg",
          "answer": {
            "img": "images/2_12-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 13",
      "questions": [
        {
          "imgSrc": "images/2_13-90.jpg",
          "answer": {
            "img": "images/2_13-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_13-80.jpg",
          "answer": {
            "img": "images/2_13-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_13-70.jpg",
          "answer": {
            "img": "images/2_13-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_13-60.jpg",
          "answer": {
            "img": "images/2_13-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_13-50.jpg",
          "answer": {
            "img": "images/2_13-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_13-40.jpg",
          "answer": {
            "img": "images/2_13-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_13-35.jpg",
          "answer": {
            "img": "images/2_13-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_13-30.jpg",
          "answer": {
            "img": "images/2_13-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_13-25.jpg",
          "answer": {
            "img": "images/2_13-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_13-20.jpg",
          "answer": {
            "img": "images/2_13-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_13-15.jpg",
          "answer": {
            "img": "images/2_13-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_13-10.jpg",
          "answer": {
            "img": "images/2_13-10-answer.jpg"
          }
        },
        {
          "imgSrc": ["images/2_13-5.jpg", "images/2_13-5-0.jpg"],
          "answer": {
            "img": "images/2_13-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_13-1.jpg",
          "answer": {
            "img": "images/2_13-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 14",
      "questions": [
        {
          "imgSrc": "images/2_14-90.jpg",
          "answer": {
            "img": "images/2_14-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-80.jpg",
          "answer": {
            "img": "images/2_14-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-70.jpg",
          "answer": {
            "img": "images/2_14-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-60.jpg",
          "answer": {
            "img": "images/2_14-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-50.jpg",
          "answer": {
            "img": "images/2_14-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-40.jpg",
          "answer": {
            "img": "images/2_14-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-35.jpg",
          "answer": {
            "img": "images/2_14-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-30.jpg",
          "answer": {
            "img": "images/2_14-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-25.jpg",
          "answer": {
            "img": "images/2_14-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-20.jpg",
          "answer": {
            "img": "images/2_14-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-15.jpg",
          "answer": {
            "img": "images/2_14-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-10.jpg",
          "answer": {
            "img": "images/2_14-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-5.jpg",
          "answer": {
            "img": "images/2_14-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_14-1.jpg",
          "answer": {
            "img": "images/2_14-1-answer.jpg"
          }
        }
      ]
    },
    {
      "name": "עונה 2 פרק 15",
      "questions": [
        {
          "imgSrc": "images/2_15-90.jpg",
          "answer": {
            "img": "images/2_15-90-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-80.jpg",
          "answer": {
            "img": "images/2_15-80-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-70.jpg",
          "answer": {
            "img": "images/2_15-70-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-60.jpg",
          "answer": {
            "img": "images/2_15-60-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-50.jpg",
          "answer": {
            "img": "images/2_15-50-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-40.jpg",
          "answer": {
            "img": "images/2_15-40-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-35.jpg",
          "answer": {
            "img": "images/2_15-35-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-30.jpg",
          "answer": {
            "img": "images/2_15-30-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-25.jpg",
          "answer": {
            "img": "images/2_15-25-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-20.jpg",
          "answer": {
            "img": "images/2_15-20-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-15.jpg",
          "answer": {
            "img": "images/2_15-15-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-10.jpg",
          "answer": {
            "img": "images/2_15-10-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-5.jpg",
          "answer": {
            "img": "images/2_15-5-answer.jpg"
          }
        },
        {
          "imgSrc": "images/2_15-1.jpg",
          "answer": {
            "img": "images/2_15-1-answer.jpg"
          }
        }
      ]
    }
  ]
  // ======= End paste =======
  
  
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