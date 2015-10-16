var bio = {
    "name": "Anastasiia Viun",
    "role": "Front-End Developer",
    "welcomeMessage": "Hi! This is my resume page.",
    "skills": ["JavaScript", "CSS", "HTML", "Leadership", "Testing", "Java"],
    "contacts": {
        "phone": "+1 514 555 55 55",
        "email": "Ana.anto@gmail.com",
        "githubName": "aviun",
        "twitter": "",
        "location": "2500 Rue Benny-Crescent, Montreal, Québec H4B 2R2"
    },
    "photo": "images/me.jpg"
};

bio.display = function () {

    function displayRole() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
    }

    displayRole();

    function displayName() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

    }

    displayName();

    function displayPhoto() {
        var formattedPhoto = HTMLbioPic.replace("%data%", bio.photo);
        $("#header").append(formattedPhoto);
        console.log(formattedPhoto);
    }

    displayPhoto();

    function displayWelcomeMessage() {
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);
    }

    displayWelcomeMessage();

    function displaySkills() {
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
    }

    displaySkills();

    function displayTopContacts() {
        var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.githubName);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#topContacts").append(formattedPhone);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);

        $("#footerContacts").append(formattedPhone);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);
    }

    displayTopContacts();
};
bio.display();

var work = {
    "jobs": [
        {
            "employer": "VMC",
            "title": "Senior LQA Tester",
            "location": "1155 Metcalf street, Montreal, H2L 2T1",
            "datesWorked": "November 2014 - now",
            "description": "Leading and co-leading teams of testers out of 4-10 people for a short-term projects" +
            " (1 day - several months). Identifying and tracking bugs in the bug-tracking system " +
            "(JIRA, RedMine, Hansoft, Bugzilla etc.). Verifying grammar and language mistakes in tested language. " +
            "Ensuring bugs were fixed and implemented correctly."
        },
        {
            "employer": "OLL TV",
            "title": "financial clerk",
            "location": "Haidara St, 50-52, Kyiv, Ukraine",
            "datesWorked": "April 2012 - February 2014",
            "description": "Accounting, legal documents revision"
        },
        {
            "employer": "Investment-Financial Group CAPITAL",
            "title": "Translator/Economist",
            "location": "Tarasivska St, 40/52, Kyiv, Ukraine",
            "datesWorked": "April 2011 - April 2012",
            "description": "Maintaining daily stock market analysis and translating it into English. "
            + "Translation of company website, company news, reports, presentations. Performing operations with securities."
        }
    ]
};

work.display = function () {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
        var formattedDatesWorked = HTMLworkDates.replace("%data%", job.datesWorked);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);


        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDatesWorked);
        $(".work-entry:last").append(formattedDescription);
        $(".work-entry:last").append(formattedLocation);


    });
};
work.display();

var education = {
    "schools": [
        {
            "name": "Kyiv National Linguistic University",
            "location": "Ulitsa Ivana Fyodorova, 6А, Kyiv, Ukraine",
            "datesAttended": "September 2005 - June 2010",
            "degree": "Bachelor",
            "majors": ["Economics", "English"]
        },
        {
            "name": "Concordia University, SQL",
            "datesAttended": "April 2015 - May 2015",
            "degree": "2 month program",
            "majors": ["SQL"],
            "location": "Faubourg Tower, Montreal, QC H3H"
        },

        {
            "name": "Concordia University, Java 1",
            "datesAttended": "June 2015 - August 2015",
            "majors": ["Java"],
            "degree": "2 month program",
            "location": "Faubourg Tower, Montreal, QC H3H"
        }
    ],
    "onlineCourses": [
        {
            "name": "Udacity Nanodegree",
            "year": "July 2015 - February 2016",
            "url": "https://www.udacity.com/nanodegree"
        }
    ]
};

education.display = function () {
    displaySchools = function () {
        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolNameAndDegree = HTMLschoolNameAndDegree.replace("%data%",
                education.schools[school].name + " - " + education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

            var schoolMajors = education.schools[school].majors[0];
            for (var i = 1; i < education.schools[school].majors.length; i++) {
                schoolMajors = schoolMajors + ", " + education.schools[school].majors[i];
            }

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schoolMajors);

            $(".education-entry:last").append(formattedSchoolNameAndDegree);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    };
    displaySchools();

    displayCourses = function () {

        for (var course in education.onlineCourses) {
            $(".education-entry:last").append(HTMLonlineClasses);

            var formattedCourseName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].name);
            var formattedCourseYear = HTMLonlineDates.replace("%data%", education.onlineCourses[course].year);
            var formattedCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

            $(".education-entry:last").append(formattedCourseName);
            $(".education-entry:last").append(formattedCourseYear);
            $(".education-entry:last").append(formattedCourseURL);

        }
    };
    displayCourses();
};
education.display();

var projects = {
    "projects": [
        {
            "title": "Udacity Nanodegree",
            "datesWorked": "July 2015 - February 2016",
            "description": "Learning the fundamentals of how the web works and gaining a working knowledge of the three foundational languages that power each and every website: HTML, CSS and JavaScript.",
            "imagesURL": [
                "images/projects-udacity-nanodegree.jpg",
                "images/projects-udacity.jpg"
            ]
        }
    ]

};


projects.display = function () {

    for (project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].imagesURL.length > 0) {
            for (image in projects.projects[project].imagesURL) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].imagesURL[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }

    }
};
projects.display();

$("#mapDiv").append(googleMap);