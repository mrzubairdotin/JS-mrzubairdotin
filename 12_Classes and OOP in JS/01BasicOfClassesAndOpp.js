// ----------- Kya JavaScript me classic hoti hai ---------------
// JavaScript has a concept called "classes," introduced in ECMAScript 2015 (also known as ES6). However, it's important to understand that JavaScript's classes are syntactic sugar over its existing prototype-based inheritance model.
// In other words, while JavaScript allows you to define classes using the class keyword, under the hood, it still relies on prototypes for inheritance. So, JavaScript "classes" aren't true classes in the same sense as in class-based languages like Java or C++, but they provide a more familiar syntax for those coming from such languages.
// HINDI : हाँ, जावास्क्रिप्ट में "क्लास" की एक अवधारणा है, जो ECMAScript 2015 (या ES6) में पेश की गई थी। हालांकि, यह समझना महत्वपूर्ण है कि जावास्क्रिप्ट के "क्लास" अपनी मौजूदा प्रोटोटाइप-आधारित विरासत मॉडल के ऊपर सिर्फ़ सिन्टेटिक चीनी हैं।
// अन्य शब्दों में, जबकि जावास्क्रिप्ट आपको क्लास की शब्दकोश का उपयोग करके क्लास को परिभाषित करने की अनुमति देता है, लेकिन उसके नीचे, यह विरासत के लिए प्रोटोटाइप का आधार होता है। इसलिए, जावास्क्रिप्ट "क्लासेस" अन्य भाषाओं के क्लासों के समान तरीके से वास्तविक क्लास नहीं हैं, लेकिन वे उन्हें ज्यादा परिचित सिन्टेक्स प्रदान करते हैं जो ऐसी भाषाओं से आते हैं।


// Basic example of how classes are defined and used in JavaScript
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog('Buddy'); 
  dog.speak(); // Output: "Buddy barks."
  
// इस उदाहरण में, एनिमल एक आधारिक क्लास है, और डॉग एक सब-क्लास है जो एनिमल को विस्तारित करता है। आप इन क्लासों से ऑब्जेक्ट्स को न्यू शब्दकोश का उपयोग करके बना सकते हैं और उन पर मेथड को जैसा सामान्य बुलाया जाता है, उसे कॉल कर सकते हैं।
// तो, हालांकि जावास्क्रिप्ट में "क्लास" हैं, लेकिन ये क्लासेस अन्य भाषाओं के क्लासों के समान तरीके से काम नहीं करते हैं, लेकिन वे ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग को संगठित करने और समर्थित करने के लिए एक समान उद्देश्य प्रदान करते हैं। 


// -------------- OOP(Object-Oriented Programming) -------------------- //
// Object-Oriented Programming (OOP) in JavaScript means organizing code into objects that store both data and behavior. This means breaking down our code into different objects, each responsible for specific features and actions. JavaScript is a multi-paradigm language, which means it supports various programming styles like procedural, functional, and object-oriented programming. In JavaScript, OOP includes concepts like Encapsulation, Inheritance, Polymorphism, and Abstraction. By using these concepts, we structure our code to be modular, reusable, and adaptable to different scenarios.
// जावास्क्रिप्ट में ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग (OOP) का मतलब है कि हम कोड को वस्तुओं के रूप में आयोजित करते हैं जो डेटा और व्यवहार को संग्रहित करती हैं। इसका मतलब है कि हम अपने कोड को विभिन्न ऑब्जेक्ट्स में विभाजित करके उनकी विशेषताओं और व्यवहार को संग्रहित कर सकते हैं। जावास्क्रिप्ट एक मल्टी-पैराडाइम भाषा है, जिसका मतलब है कि यह प्रोग्रामिंग पैराडाइम्स जैसे कि प्रोसीडरल, फंक्शनल, और ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग का समर्थन करती है। जावास्क्रिप्ट में OOP के मुख्य अवधारणाओं में शामिल हैं: Encapsulation, Inheritance, Polymorphism, और Abstraction। इन अवधारणाओं का उपयोग करके हम अपने कोड को मोड्यूलर, पुनरयोग्य, और संभावनाओं के अनुसार बनाते हैं।


// ------------- Object ------------------ //
// In JavaScript, an object is a fundamental data type that represents a collection of key-value pairs. It's a container for data and functions, allowing for structured organization and manipulation of data. Objects in JavaScript can hold various types of data, including primitive data types (such as numbers, strings, and booleans) and other objects.
// Objects are defined using curly braces {} and consist of one or more key-value pairs separated by commas. The keys are strings (or symbols in ES6+), and the values can be any valid JavaScript data type, including other objects or functions.
// जावास्क्रिप्ट में ऑब्जेक्ट एक मौलिक डेटा प्रकार है जो की-मान जोड़ों का प्रतिनिधित्व करता है। यह डेटा और कार्यों के लिए एक ठोस संरचना प्रदान करता है, जिससे डेटा को व्यवस्थित और परिवर्तन किया जा सकता है। जावास्क्रिप्ट में ऑब्जेक्ट विभिन्न प्रकार के डेटा को रख सकता है, जैसे की मूल्यमान, स्ट्रिंग्स, और अन्य ऑब्जेक्ट्स। यह कुछ ब्रेसेस {} के बीच निर्धारित किया जाता है और एक से अधिक कुंजी-मान जोड़ों से मिलकर बनता है। कुंजी स्ट्रिंग होती हैं और मान किसी भी वैध जावास्क्रिप्ट डेटा प्रकार की हो सकती है। इस उदाहरण में, person एक ऑब्जेक्ट है जिसमें तीन प्रॉपर्टी हैं: नाम, उम्र, और शहर। प्रत्येक प्रॉपर्टी के साथ एक संबंधित मान होता है। आप ऑब्जेक्ट की प्रॉपर्टी को डॉट नोटेशन (object.property) या ब्रैकेट नोटेशन (object['property']) का उपयोग करके पहुँच सकते हैं।

// object is a collection of property and method example to toLowerCase


// Why use OOP
// ??????? 


// --------------- Parts of OOP ------------------- //
// -Object literal  
// -Constructor function
// -Prototypes
// -Class
// -Instances (new,this)
// ----------- Object literal --------------------- //
// An object literal in JavaScript is a way to define and create objects using a simple and concise syntax. It allows you to create objects on the fly without the need for a constructor function. Object literals are defined using curly braces {} and consist of key-value pairs separated by commas.
// जावास्क्रिप्ट में ऑब्जेक्ट लिटरल (Object literal) एक तरीका है जिससे हम एक सरल और संक्षिप्त तरीके से विभिन्न वस्तुओं को परिभाषित और बना सकते हैं। यह आपको एक्सट्रा कंस्ट्रक्टर फंक्शन की आवश्यकता नहीं होती है। ऑब्जेक्ट लिटरल को कर्वी ब्रेसेस {} का उपयोग करके परिभाषित किया जाता है और यह की-मान जोड़ों का संग्रह होता है जिन्हें कमा और कोमा द्वारा अलग किया जाता है।

// Here's a basic example
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  // Accessing properties of the object
  console.log(person.name); // Output: "John"
  console.log(person.age); // Output: 30
  console.log(person.city); // Output: "New York"


// In OOP in 4 pillars
// Abstraction => Abstraction in JavaScript means hiding the complicated parts of code and showing only the important parts. It helps users to use the code easily without needing to understand all the details || HINDI : जावास्क्रिप्ट में अबस्ट्रैक्शन का मतलब कोड की जटिल भागों को छुपाना है और केवल महत्वपूर्ण हिस्सों को प्रकट करना है। यह उपयोगकर्ताओं को सभी विवरणों को समझाने की आवश्यकता नहीं होती है।

// --- example 

// Encapulation => Encapsulation in JavaScript means bundling the data (variables) and the methods (functions) that operate on the data into a single unit, called an object. This protects the data from being accessed directly from outside the object's scope, and allows controlled access through methods. It's like putting your data in a safe and only allowing specific actions (methods) to interact with it. || HINDI : एनकैप्सुलेशन जावास्क्रिप्ट में डेटा (वेरिएबल्स) और मेथड्स (फंक्शन्स) को एक ही इकाई में बंडल करने का मतलब है, जिसे ऑब्जेक्ट कहा जाता है। यह डेटा को बाहरी ऑब्जेक्ट की सीमा से सीधे पहुंचने से बचाता है, और विधियों के माध्यम से नियंत्रित पहुंच की अनुमति देता है। यह अपने डेटा को एक सुरक्षित स्थान में रखने के तरह है और केवल निश्चित क्रियाओं (मेथड्स) को इसके साथ व्यवहार करने की अनुमति देता है।

// Inhertiance => Inheritance in JavaScript allows one object to inherit properties and methods from another object. This means that you can create a new object based on an existing one, inheriting its features. It helps in reusing code and establishing relationships between objects. || HINDI : जावास्क्रिप्ट में इन्हेरिटेंस (Inheritance) का मतलब है किसी ऑब्जेक्ट को किसी दूसरे ऑब्जेक्ट से गुण और विधियों को वारिस्त करने की अनुमति देना। इसका मतलब है कि आप एक नए ऑब्जेक्ट को एक मौजूदा ऑब्जेक्ट के आधार पर बना सकते हैं, जिससे उसकी विशेषताओं को वारिस्त किया जाता है। यह कोड को फिर से प्रयोग करने में मदद करता है और ऑब्जेक्ट के बीच संबंध स्थापित करता है।

// Polymorphism => Polymorphism in JavaScript refers to the ability of objects to take on different forms or behaviors based on their context. This means that objects can respond differently to the same method call depending on their specific implementation. Polymorphism allows for flexibility and extensibility in code, making it easier to reuse and maintain. || HINDI : जावास्क्रिप्ट में पॉलीमॉर्फिज़म उस सामर्थ्य को संदर्भ देता है जिसमें ऑब्जेक्ट्स अपनी विशेष रूप या व्यवहार को बदल सकते हैं आधारित उनके संदर्भ पर। इसका मतलब है कि ऑब्जेक्ट्स एक ही मेथड कॉल पर विभिन्न रूपों में प्रतिक्रिया दे सकते हैं जो उनके विशिष्ट अंमलन पर निर्भर करता है। पॉलीमॉर्फिज़म कोड में लचीलापन और विस्तार की सुविधा प्रदान करता है, जिससे इसे पुनः उपयोग और रखरखाव करना आसान होता है।

  