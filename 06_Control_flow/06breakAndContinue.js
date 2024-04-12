// break

// In JavaScript, we use the 'break' statement to stop a loop or a switch statement in the middle. When a 'break' statement is found inside a loop or a switch statement, the program immediately stops there and continues running the code after the loop or switch.
// HINDI : जावास्क्रिप्ट में, 'ब्रेक' स्टेटमेंट का उपयोग किसी लूप या स्विच स्टेटमेंट को बिच में ही बंद करने के लिए किया जाता है। जब कोई लूप या स्विच स्टेटमेंट के अंदर 'ब्रेक' स्टेटमेंट मिलता है, तो प्रोग्राम की व्यावसायिकता तुरंत वहीं रुक जाती है, और लूप या स्विच के बाद के स्टेटमेंट पर चलती है।

// const fruit = 'apple';

// switch (fruit) {
//     case 'banana':
//         console.log('This is a banana.');
//         break;
//     case 'apple':
//         console.log('This is an apple.');
//         break; // Exit the switch after printing
//     default:
//         console.log('This is not a banana or an apple.');
// }


// continue
// In JavaScript, the 'continue' statement is used to skip the current loop iteration and move on to the next one. When it's found inside a loop, the 'continue' statement makes the loop go to the next iteration and doesn't execute the remaining code of the current iteration.
// HINDI : जावास्क्रिप्ट में, 'कंटिन्यू' स्टेटमेंट का उपयोग लूप की वर्तमान घुमाव को छोड़ देने के लिए किया जाता है और अगले घुमाव में जारी रहने के लिए। जब किसी लूप के अंदर मिलता है, तो 'कंटिन्यू' स्टेटमेंट से लूप अगले घुमाव पर चला जाता है और वर्तमान घुमाव के शेष कोड को नहीं चलाता।

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip the iteration when i equals 2
    }
    console.log(i); // This will print 0, 1, 3, 4
}

