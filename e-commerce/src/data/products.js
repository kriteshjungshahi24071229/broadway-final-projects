const products = [

{
id: 1,
name: "Acer Nitro V-16",
category: "Laptops",
price: 165000,
image: "/images/laptop.jpg",
shortDescription:
"Powerful gaming laptop with RTX graphics, high refresh rate, and strong performance.",
description: `
Acer's mid-range gaming laptop line, with a 16" 165Hz QHD display,
Intel 13th-gen i7 CPU, and NVIDIA RTX 4060 GPU. Good for gaming, content creation, and general productivity.
The V-16 is a solid choice for gamers who want a balance of performance and price, with a good display and build quality.
`
},

{
id: 5,
name: "Apple MacBook Pro M1",
category: "Laptops",
price: 121000,
image: "/images/laptop2.jpg",
shortDescription:
"Premium laptop with Apple Silicon performance, sharp display, and excellent battery life.",
description: `
Apple's first generation of M1-powered MacBook Pros, with a 13.3" Retina display, up to 16GB RAM, and up to 2TB SSD storage.
The M1 chip provides excellent performance and battery life, making it a great choice for professionals and creatives.  
`
},

{
id: 6,
name: "ASUS ROG Strix Hero",
category: "Laptops",
price: 320000,
image: "/images/laptop3.jpg",
shortDescription:
"High-performance gaming laptop built for competitive gaming, streaming, and creative work.",
description: `
ASUS's high-end gaming laptop line, with a 15.6" 300Hz FHD display, Intel 13th-gen i9 CPU, and NVIDIA RTX 4070 GPU.
The ROG Strix Hero is designed for serious gamers and content creators who need top-tier performance and features.  
`
},

{
id: 7,
name: "MSI Cyborg 15",
category: "Laptops",
price: 165000,
image: "/images/laptop4.jpg",
shortDescription:
"Affordable gaming laptop with RTX graphics, 144Hz display, and solid gaming performance.",
description: `
MSI's mid-range gaming laptop line, with a 15.6" 144Hz FHD display, Intel 13th-gen i7 CPU, and NVIDIA RTX 4060 GPU.   
`
},

{
id: 4,
name: "Iphone 17 Pro Max",
category: "Smartphones",
price: 242499,
image: "/images/phone.jpg",
shortDescription:
"Premium flagship smartphone with powerful performance, advanced cameras, and a stunning display.",
description: `
Apple's latest flagship, with a 6.7" Super Retina XDR display, A17 Bionic chip, and up to 1TB storage.
The iPhone 17 Pro Max offers top-tier performance, camera capabilities, and build quality, 
making it a premium choice for Apple enthusiasts.  
`
},

{
id: 8,
name: "One Plus Nord CE 4",
category: "Smartphones",
price: 39999,
image: "/images/phone2.jpg",
shortDescription:
"Fast mid-range smartphone with an AMOLED display, fast charging, and smooth performance.",
description:
`
OnePlus's mid-range smartphone, with a 6.43" AMOLED display, Snapdragon 695 chipset, and up to 12GB RAM.
The Nord CE 4 offers a good balance of performance, camera quality, and battery life at an affordable price point.  
4500mAh battery with 33W fast charging (50% in 30 minutes), 64MP triple camera setup, and OxygenOS for a clean software 
experience.
`
},

{
id: 9,
name: "Nothing 3A",
category: "Smartphones",
price: 53999,
image: "/images/phone3.jpg",
shortDescription:
"Stylish mid-range smartphone with a unique design, AMOLED display, and capable cameras.",
description:
`
Nothing's mid-range smartphone, with a 6.55" AMOLED display, Snapdragon 7 Gen 1 chipset, and up to 12GB RAM.
The Nothing 3A offers a unique design, good performance, and a clean software experience at an affordable price point.
4500mAh battery with 33W fast charging (50% in 30 minutes), 50MP dual camera setup, and Nothing OS for a clean software 
experience.
`
},

{
id: 10,
name: "Samsung Galaxy S25",
category: "Smartphones",
price: 99999,
image: "/images/phone4.jpg",
shortDescription:
"Compact flagship smartphone with powerful performance, advanced cameras, and a vibrant display.",
description:  
`
Samsung's flagship smartphone, with a 6.8" Dynamic AMOLED display, Exynos 2400/Snapdragon 8 Gen 3 chipset, and up to 16GB RAM.
The Galaxy S25 offers top-tier performance, camera capabilities, and build quality, making it a premium choice for Android enthusiasts.
5000mAh battery with 45W fast charging (50% in 30 minutes), 108MP triple camera setup, and One UI for a feature-rich software experience. 
`
},

{
id: 2,
name: "Asta WolfFang",
category: "Audio",
price: 2499,
image: "/images/airbuds.jpg",
shortDescription:
"Affordable wireless gaming earbuds with clear audio, low latency, and long battery life.",
description:
`
Asta's budget TWS earbuds, with Bluetooth 5.3, 10mm drivers, and a compact charging case.
The WolfFang offers decent sound quality and battery life for its price, making it a good choice for casual listeners.  
`
},

{
id: 11,
name: "Apple AirPods 4",
category: "Audio",
price: 25000,
image: "/images/airbuds2.jpg",
    
description:
`
Apple's latest TWS earbuds, with Bluetooth 5.4, spatial audio, and active noise cancellation.
The AirPods 4 offer excellent sound quality, seamless integration with Apple devices, and a premium design, making them a top choice for Apple users.  
24-hour total battery life (earbuds + case), IPX4 sweat and water resistance, and a customizable fit with silicone ear tips.
      `
},

{
id: 12,
name: "Leaf Buds X121",
category: "Audio",
price: 2499,
image: "/images/airbuds3.jpg",
shortDescription:
"Affordable wireless earbuds offering clear sound, strong bass, and convenient everyday listening.",
description:
`
Leaf's budget TWS earbuds, with Bluetooth 5.2, 8mm drivers, and a compact charging case.
The Buds X121 offer decent sound quality and battery life for its price, making it a good choice for casual listeners.  
20-hour total battery life (earbuds + case), IPX5 sweat and water resistance, and a comfortable fit with silicone ear tips. 
`
},

{
id: 13,
name: "BOAT AirDopes 219",
category: "Audio",
price: 2999,
image: "/images/airbuds4.jpg",
shortDescription:
"Budget-friendly TWS earbuds with powerful bass, low latency, and long battery life.",
description:
`
BOAT's budget TWS earbuds, with Bluetooth 5.0, 6mm drivers, and a compact charging case.
`
},

{
id: 3,
name: "T800 Ultra SmartWatch",
category: "Smart Wear",
price: 1200,
image: "/images/watch.jpg",
shortDescription:
"Affordable smartwatch with AMOLED display, fitness tracking, and smart features.",
description:
`
A budget-friendly smartwatch with a 1.78" AMOLED display, heart rate and SpO2 monitoring, sleep tracking, 
and fitness tracking features. Compatible with both Android and iOS devices.
`
},

{
id: 14,
name: "Apple Watch Series 7",
category: "Smart Wear",
price: 35000,
image: "/images/watch2.jpg",
shortDescription:
"Feature-rich smartwatch with a bright display, fitness tracking, and advanced health features.",
description:
`
Apple's latest smartwatch, featuring a larger always-on Retina display, blood oxygen monitoring, ECG app,
and a variety of health and fitness tracking features. Compatible with iOS devices.
`
},

{
id: 15,
name: "Zero Qube Smart Watch",
category: "Smart Wear",
price: 6999,
image: "/images/watch3.jpg",
shortDescription:
"Affordable smartwatch with AMOLED display, health monitoring, fitness tracking, and smart features.",
description:
`
A mid-range smartwatch with a 1.69" AMOLED display, heart rate and SpO2 monitoring, sleep tracking,
and fitness tracking features. Compatible with both Android and iOS devices.
`
},

{
id: 16,
name: "Titan Evoke S ",
category: "Smart Wear",
price: 13490,
image: "/images/watch4.jpg",
shortDescription:
"Stylish everyday smartwatch with fitness tracking, health monitoring, and a lightweight design.",
description:
`
A budget-friendly smartwatch with a 1.3" TFT display, heart rate and SpO2 monitoring, sleep tracking,
and fitness tracking features. Compatible with both Android and iOS devices.
`
}
];

export default products;