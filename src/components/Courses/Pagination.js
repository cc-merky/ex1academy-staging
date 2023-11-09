export function simulateAPICall(searchQuery) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful API response
      const allCourses = [
        {
          uuid: "81dfd696-abd8-479a-8b3c-46172d739c84",
          title: "Full course on Excel",
          course_type_id: 2,
          course_level_id: 1,
          course_link: "https://youtu.be/0tdlR1rBwkM?si=4Do9cpRT5aJFuGPN",
          course_description: null,
          images: ["znSi3OZ5dP1zZ1rzJpQhbPEcKy74p8wF6mgEq4mC.jpg"],
          instructors: "Benjamin James",
          duration: null,
          "time-uat": null,
          "time-wat": null,
          price: "500",
          currency: "USD",
          skill: "Excel, Power Bi",
          affiliate_organization: null,
          course_id: null,
          lesson_count: 1,
          lesson_count_list: [
            {
              id: 4,
              uuid: "64d1451c-cd2f-46e6-9e06-5e0862154c44",
              course_id: 12,
              title: "Introduction to Excel",
              course_link: "https://youtu.be/0tdlR1rBwkM?si=31xP5S_0RfuuGjqV",
              course_description: "<div>This is an introduction</div>",
              instructors: "Benjamin James",
              duration: "30mins",
              skill: "Excel",
              created_at: "2023-10-31T22:27:21.000000Z",
              updated_at: "2023-10-31T22:27:21.000000Z",
            },
          ],
        },
        // Add more course data here...
        {
          uuid: "another-course-uuid",
          title: "Web Development Fundamentals",
          course_type_id: 1,
          course_level_id: 2,
          course_link: "https://example.com/web-dev-fundamentals",
          course_description: "<div>Learn the basics of web development.</div>",
          images: ["web-dev-fundamentals.jpg"],
          instructors: "Sarah Smith",
          duration: "4 weeks",
          price: "300",
          currency: "USD",
          skill: "HTML, CSS, JavaScript",
          affiliate_organization: "WebSkills Inc.",
          course_id: 42,
          lesson_count: 10,
          lesson_count_list: [
            {
              id: 5,
              uuid: "lesson-uuid-1",
              course_id: 42,
              title: "HTML Basics",
              course_link: "https://example.com/html-basics",
              course_description: "<div>Introduction to HTML.</div>",
              instructors: "Sarah Smith",
              duration: "1 hour",
              skill: "HTML",
              created_at: "2023-11-01T14:30:00.000000Z",
              updated_at: "2023-11-01T14:30:00.000000Z",
            },
            // Add more lesson data for this course...
          ],
        },
        // Add more courses with the same structure...
      ];

      // Filter the courses based on the search query
      const filteredCourses = allCourses.filter((course) => {
        return course.title.toLowerCase().includes(searchQuery.toLowerCase());
      });

      resolve(filteredCourses);
    }, 1000); // Simulate a 1-second delay
  });
}
