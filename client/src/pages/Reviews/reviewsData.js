const reviewsData = {
    all: [
        { name: "G. VenkataKousik", role: "Full Stack Developer", rating: 4.0, comment: "Loved their hospitality, the result that I got there was the best in my life. The discounts are very high compared to other restaurants. The order was given in no time, the waiting time is very less.", image: "./assets/images/reviews/m3.jpg" },
        { name: "Amit Kumar", role: "Software Engineer", rating: 4.5, comment: "Amazing service and great ambiance.", image: "./assets/images/reviews/m1.jpg" },
        { name: "John Doe", role: "Product Manager", rating: 4.2, comment: "A delightful experience with top-notch service.", image: "./assets/images/reviews/m2.jpg" },
        { name: "Alice Smith", role: "UI/UX Designer", rating: 4.8, comment: "The best dining experience I've ever had.", image: "./assets/images/reviews/f1.jpg" },
        { name: "Chen Wei", role: "Data Scientist", rating: 4.0, comment: "Great food and excellent service.", image: "./assets/images/reviews/m4.jpg" },
        { name: "Sakura Yamamoto", role: "Marketing Manager", rating: 3.9, comment: "The atmosphere is very cozy and welcoming.", image: "./assets/images/reviews/f2.jpg" },
        { name: "Robert Brown", role: "Business Analyst", rating: 4.3, comment: "Quick service and delicious meals.", image: "./assets/images/reviews/m5.jpg" }, { name: "John Doe", role: "Product Manager", rating: 4.2, comment: "A delightful experience with top-notch service.", image: "./assets/images/reviews/m2.jpg" },
        { name: "Alice Smith", role: "UI/UX Designer", rating: 4.8, comment: "The best dining experience I've ever had.", image: "./assets/images/reviews/f1.jpg" },
    ],
    india: [
        { name: "Amit Kumar", role: "Software Engineer", rating: 4.5, comment: "Amazing service and great ambiance.", image: "./assets/images/reviews/m1.jpg" },
        { name: "Priya Singh", role: "Doctor", rating: 4.7, comment: "The food was exceptional and the staff were very friendly.", image: "./assets/images/reviews/f3.jpg" },
        { name: "Ravi Patel", role: "Civil Engineer", rating: 4.4, comment: "Great experience, will definitely come again.", image: "./assets/images/reviews/m6.jpg" },
        { name: "Neha Sharma", role: "Teacher", rating: 4.6, comment: "Loved the food and the ambiance.", image: "./assets/images/reviews/f4.jpg" },
        { name: "Karan Kapoor", role: "Architect", rating: 4.3, comment: "A very pleasant dining experience.", image: "./assets/images/reviews/m7.jpg" },
        { name: "Suman Joshi", role: "Lawyer", rating: 4.8, comment: "Excellent service and delicious food.", image: "./assets/images/reviews/f5.jpg" },
        { name: "Rahul Verma", role: "Graphic Designer", rating: 4.2, comment: "The service was quick and the food was tasty.", image: "./assets/images/reviews/m8.jpg" }, { name: "Karan Kapoor", role: "Architect", rating: 4.3, comment: "A very pleasant dining experience.", image: "./assets/images/reviews/m7.jpg" },
        { name: "Suman Joshi", role: "Lawyer", rating: 4.8, comment: "Excellent service and delicious food.", image: "./assets/images/reviews/f5.jpg" },
        { name: "Rahul Verma", role: "Graphic Designer", rating: 4.2, comment: "The service was quick and the food was tasty.", image: "./assets/images/reviews/m8.jpg" }
    ],
    usa: [
        { name: "John Doe", role: "Product Manager", rating: 4.2, comment: "A delightful experience with top-notch service.", image: "./assets/images/reviews/m2.jpg" },
        { name: "Emily Davis", role: "Accountant", rating: 4.7, comment: "Loved the atmosphere and the food.", image: "./assets/images/reviews/f6.jpg" },
        { name: "Michael Johnson", role: "Engineer", rating: 4.5, comment: "Great place to dine with family.", image: "./assets/images/reviews/m9.jpg" },
        { name: "Sarah Wilson", role: "Nurse", rating: 4.6, comment: "The service was impeccable.", image: "./assets/images/reviews/f7.jpg" },
        { name: "David Martinez", role: "Chef", rating: 4.3, comment: "Delicious food and great service.", image: "./assets/images/reviews/m10.jpg" },
        { name: "Jessica Taylor", role: "Photographer", rating: 4.8, comment: "Amazing food and fantastic service.", image: "./assets/images/reviews/f8.jpg" },
        { name: "Robert Brown", role: "Business Analyst", rating: 4.3, comment: "Quick service and delicious meals.", image: "./assets/images/reviews/m5.jpg" }, { name: "Michael Johnson", role: "Engineer", rating: 4.5, comment: "Great place to dine with family.", image: "./assets/images/reviews/m9.jpg" },
        { name: "Sarah Wilson", role: "Nurse", rating: 4.6, comment: "The service was impeccable.", image: "./assets/images/reviews/f7.jpg" },
        { name: "David Martinez", role: "Chef", rating: 4.3, comment: "Delicious food and great service.", image: "./assets/images/reviews/m10.jpg" },
        { name: "Jessica Taylor", role: "Photographer", rating: 4.8, comment: "Amazing food and fantastic service.", image: "./assets/images/reviews/f8.jpg" },
    ],
    china: [
        { name: "Chen Wei", role: "Data Scientist", rating: 4.0, comment: "Great food and excellent service.", image: "./assets/images/reviews/m4.jpg" },
        { name: "Li Jing", role: "Software Developer", rating: 4.5, comment: "A wonderful dining experience.", image: "./assets/images/reviews/m11.jpg" },
        { name: "Wang Fang", role: "Financial Analyst", rating: 4.3, comment: "The food was delicious and the staff were very kind.", image: "./assets/images/reviews/f9.jpg" },
        { name: "Zhang Wei", role: "Artist", rating: 4.6, comment: "A great place to relax and enjoy a meal.", image: "./assets/images/reviews/m12.jpg" },
        { name: "Huang Li", role: "Teacher", rating: 4.7, comment: "Excellent service and ambiance.", image: "./assets/images/reviews/f10.jpg" },
        { name: "Gao Lei", role: "Entrepreneur", rating: 4.4, comment: "The best restaurant experience I've had.", image: "./assets/images/reviews/m13.jpg" },
        { name: "Sun Mei", role: "Doctor", rating: 4.2, comment: "Good food and fast service.", image: "./assets/images/reviews/f11.jpg" }, { name: "Zhang Wei", role: "Artist", rating: 4.6, comment: "A great place to relax and enjoy a meal.", image: "./assets/images/reviews/m12.jpg" },
        { name: "Huang Li", role: "Teacher", rating: 4.7, comment: "Excellent service and ambiance.", image: "./assets/images/reviews/f10.jpg" },
    ],
    japan: [
        { name: "Sakura Yamamoto", role: "Marketing Manager", rating: 3.9, comment: "The atmosphere is very cozy and welcoming.", image: "./assets/images/reviews/f2.jpg" },
        { name: "Hiroshi Tanaka", role: "Business Owner", rating: 4.1, comment: "A wonderful place to dine with family.", image: "./assets/images/reviews/m14.jpg" },
        { name: "Yuki Nakamura", role: "Designer", rating: 4.3, comment: "Great food and quick service.", image: "./assets/images/reviews/f12.jpg" },
        { name: "Kenji Sato", role: "Engineer", rating: 4.4, comment: "A pleasant dining experience.", image: "./assets/images/reviews/m15.jpg" },
        { name: "Aiko Suzuki", role: "Teacher", rating: 4.6, comment: "The staff were very friendly and the food was excellent.", image: "./assets/images/reviews/f13.jpg" },
        { name: "Kenta Yamashita", role: "Doctor", rating: 4.5, comment: "I enjoyed the meal and the ambiance.", image: "./assets/images/reviews/m16.jpg" },
        { name: "Miyuki Matsumoto", role: "Lawyer", rating: 4.2, comment: "A great place for a family dinner.", image: "./assets/images/reviews/f14.jpg" }, { name: "Kenta Yamashita", role: "Doctor", rating: 4.5, comment: "I enjoyed the meal and the ambiance.", image: "./assets/images/reviews/m16.jpg" },
        { name: "Miyuki Matsumoto", role: "Lawyer", rating: 4.2, comment: "A great place for a family dinner.", image: "./assets/images/reviews/f14.jpg" }
    ]
};

export default reviewsData;