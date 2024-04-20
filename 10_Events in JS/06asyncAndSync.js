// In JavaScript, "async" is a keyword used to define asynchronous functions. Asynchronous functions allow you to perform tasks such as fetching data from a server, reading files, or waiting for user input without blocking the execution of other code.

//When you declare a function with the "async" keyword, it means that the function will always return a promise. Inside an async function, you can use the "await" keyword to pause the execution of the function until a promise is resolved. This allows you to write asynchronous code in a more synchronous-like manner, which can make it easier to read and maintain.

// JavaScript में, "async" एक शब्द है जो असिंक्रोनस फ़ंक्शन को निर्दिष्ट करने के लिए प्रयोग होता है। असिंक्रोनस फ़ंक्शन का उपयोग करने से आप किसी कार्य को कर सकते हैं, जैसे कि सर्वर से डेटा फ़ेच करना, फ़ाइलें पढ़ना, या उपयोगकर्ता इनपुट की प्रतीक्षा कर सकते हैं, बिना किसी अन्य कोड की निष्पादन को ब्लॉक करें।

// जब आप "async" कीवर्ड के साथ एक फ़ंक्शन को परिभाषित करते हैं, तो इसका अर्थ होता है कि फ़ंक्शन हमेशा एक प्रॉमिस वापस करेगा। असिंक्रोनस फ़ंक्शन के अंदर, आप "await" कीवर्ड का उपयोग कर सकते हैं ताकि कोड का निष्पादन रुक जाए जब तक कोई प्रॉमिस पूरा नहीं होता। यह आपको असिंक्रोनस कोड को एक समरूपी तरीके से लिखने की सुविधा प्रदान करता है, जिससे कोड को समझना और बनाए रखना आसान होता है।

//Here's a simple example of an async function:
// async function fetchData() {
//     // Pause execution until the promise is resolved
//     const response = await fetch('https://api.example.com/data');
//     // Once the promise is resolved, continue execution
//     const data = await response.json();
//     return data;
//   }
  
//   // Call the async function
//   fetchData().then(data => {
//     console.log(data);
//   }).catch(error => {
//     console.error('Error fetching data:', error);
//   });

  // इस उदाहरण में, "fetchData" फ़ंक्शन को एसिंक्रोनस के रूप में घोषित किया गया है, जिसका मतलब है कि यह हमेशा एक प्रॉमिस लौटाएगा। फ़ंक्शन के अंदर, हम "await" कीवर्ड का उपयोग करते हैं ताकि कोड का निष्पादन रुक जाए जब तक "fetch" द्वारा लौटाई गई प्रॉमिस का समाधान नहीं हो जाता। यह हमें असिंक्रोनस कोड को एक समरूपी तरीके से लिखने की सुविधा प्रदान करता है, जिससे कोड को समझना और बनाए रखना आसान होता है।


  // ------------------------------------------------ //

// NOTE : by deafautl jo js me hota hai excute wo Synchronus hi hota hai and single threaded 

//  Synchronous in JS
// In JavaScript, synchronous refers to the default behavior of code execution, where statements are executed one after the other in sequential order. Synchronous code blocks the execution of further code until the current operation is completed. This means that if a statement takes a long time to execute (such as fetching data from a server), it will block the execution of subsequent code until it's finished.
// JavaScript में, सिंक्रोनस का मतलब है कोड के निष्पादन का वह प्रकार जहाँ एक वक्तावधि के कार्य को एक के बाद एक क्रमश: निष्पादित किया जाता है। सिंक्रोनस कोड के प्रयोग में, नए कार्य का निष्पादन तब तक रोका जाता है जब तक वर्तमान कार्य पूरा नहीं होता। इसका अर्थ है कि अगर कोई कार्य लम्बा समय लेता है (जैसे कि सर्वर से डेटा लेना), तो यह वर्तमान कोड के निष्पादन को रोक देगा जब तक यह पूरा नहीं होता।

// Here's an example of synchronous code
console.log('Statement 1');
console.log('Statement 2');
console.log('Statement 3');

// In this example, each statement will be executed one after the other in sequence. The next statement won't execute until the previous one has finished executing.
// इस उदाहरण में, प्रत्येक कथन को एक के बाद एक क्रमश: निष्पादित किया जाएगा। अगला कथन पिछले कथन को पूरा होने के बाद ही निष्पादित होगा।

// Synchronous code execution can sometimes lead to blocking behavior, especially when dealing with operations that take a significant amount of time to complete. This is where asynchronous programming comes into play, allowing you to execute code concurrently without waiting for each operation to finish before moving on to the next one
// सिंक्रोनस कोड के निष्पादन कभी-कभी ब्लॉकिंग व्यवहार का कारण बन सकता है, खासकर जब ऐसे कार्यों का सामना किया जाता है जिनका पूरा होने में बहुत समय लगता है। यहाँ असिंक्रोनस प्रोग्रामिंग का महत्व बढ़ता है, जो आपको प्रत्येक कार्य को पूरा होने का इंतजार किए बिना कोड को समयानुसार निष्पादित करने की सुविधा प्रदान करता है।


// Single Threaded
// In simple terms, "single threaded" in JavaScript means that JavaScript code runs in a single sequence or line, one command at a time. This means that JavaScript can only do one thing at a time, executing each task in order. If there's a task that takes a long time to finish, it can block other tasks from running until it's done. This single-threaded nature is a fundamental characteristic of JavaScript, which affects how it handles tasks and manages its resources
// "सिंगल थ्रेडेड" जवास्क्रिप्ट में एक सीक्वेंस या लाइन में कोड चलाने का मतलब है, यानी एक समय में केवल एक कमांड को ही संचालित करना। इसका अर्थ है कि जवास्क्रिप्ट केवल एक समय में केवल एक काम कर सकता है, हर काम को क्रम में पूरा करके। अगर कोई काम बहुत देर लेता है तो वह अन्य कामों को रोक सकता है, जिसे हम "ब्लॉकिंग" कहते हैं। यह सिंगल-थ्रेडेड प्रकृति जवास्क्रिप्ट की मौलिक विशेषता है, जो कैसे यह कार्यों का संचालन करता है और अपने संसाधनों को प्रबंधित करता है, पर प्रभाव डालती है।


// Execution Context
// In simple terms, "execution context" in JavaScript refers to the environment in which your code is running. It includes information such as the variables you've declared, the functions you've defined, and where the code is being executed.

// Think of it like a bubble where your code lives and operates. Inside this bubble, JavaScript keeps track of everything that's happening, like what variables you're using, what functions you're calling, and where you are in the code.

// Every time you run a function or execute some code, JavaScript creates a new execution context. This context holds all the necessary information for that specific chunk of code to run, and it helps JavaScript keep track of what's going on.

// So, execution context is like the backstage area where JavaScript manages all the details of running your code smoothly.

// सरल शब्दों में, जेएस में "एक्सीक्यूशन कॉन्टेक्स्ट" का मतलब होता है कि आपका कोड किस वातावरण में चल रहा है। इसमें वह सभी जानकारियाँ शामिल होती हैं जैसे कि आपने कौन से वेरिएबल घोषित किए हैं, आपने कौन से फ़ंक्शन परिभाषित किए हैं, और कोड कहाँ चल रहा है।

// इसे ऐसे सोचें जैसे आपका कोड जीवन और कार्य कर रहा हो। इस बबल के अंदर, जेएस सब कुछ ट्रैक करता है जैसे कि आप कौन-से वेरिएबल्स का इस्तेमाल कर रहे हैं, आप कौन से फ़ंक्शन कॉल कर रहे हैं, और कोड के किस हिस्से में आप हैं।

// हर बार जब आप एक फ़ंक्शन चलाते हैं या कोड को निष्पादित करते हैं, तो जेएस एक नया एक्सीक्यूशन कॉन्टेक्स्ट बनाता है। यह कॉन्टेक्स्ट उस विशेष कोड के लिए सभी आवश्यक जानकारियाँ रखता है, और यह जेएस को यह जानने में मदद करता है कि क्या हो रहा है।

// इसलिए, एक्सीक्यूशन कॉन्टेक्स्ट वह पिछला क्षेत्र है जहां जेएस आपके कोड को सुगमता से निष्पादित करने के सभी विवरणों का प्रबंधन करता है।


// ----------------------------------------------- //

// Blocking Code

// Blocking code in JavaScript refers to code that causes the execution to pause or wait until a certain task is completed, thereby blocking the execution of further code. This often happens with synchronous operations, especially those that involve I/O (Input/Output) tasks like fetching data from a server, reading a file from disk, or waiting for user input.
// जेएस में ब्लॉकिंग कोड वह कोड है जो किसी कार्य को पूरा होने तक इंतजार करता है और अन्य कोड को रोक देता है। यह अक्सर सिंक्रोनस कार्यों में होता है, खासकर उन कार्यों में जो I/O (Input/Output) कार्यों को शामिल करते हैं, जैसे सर्वर से डेटा प्राप्त करना, डिस्क से फ़ाइल पढ़ना, या उपयोगकर्ता से इनपुट की प्रतीक्षा करना।


// Non Blocking Code

// "Non-blocking code" in JavaScript refers to code that doesn't wait for a task to finish before moving on to execute the next line of code. Instead of stopping the execution and waiting for a task to complete, non-blocking code allows the program to continue running other tasks in parallel.

// In JavaScript, non-blocking code is often achieved through asynchronous operations. These operations initiate a task (such as fetching data from a server) and then continue executing the remaining code without waiting for the task to complete. When the task is finished, a callback function is executed to handle the result.

// "Non-blocking code" जवास्क्रिप्ट में उस कोड को कहते हैं जो किसी कार्य का पूरा होने का इंतजार नहीं करता है, बल्कि अगले कोड की प्रक्रिया को शुरू कर देता है। यानी किसी कार्य के पूरा होने की प्रतीक्षा करने की बजाय, नॉन-ब्लॉकिंग कोड दूसरे कार्यों को समय के साथ बराबर प्रोसेस करने की अनुमति देता है।

// जेएस में, नॉन-ब्लॉकिंग कोड को अक्सर असिंक्रोनस ऑपरेशन के माध्यम से प्राप्त किया जाता है। इन ऑपरेशन्स में एक कार्य को शुरू किया जाता है (जैसे कि सर्वर से डेटा प्राप्त करना), और फिर उस कार्य को पूरा होने का इंतजार किए बिना बाकी कोड का निष्पादन जारी रखा जाता है। जब कार्य पूरा होता है, तो कॉलबैक फ़ंक्शन को सक्रिय किया जाता है ताकि परिणाम का संबोधन किया जा सके।
