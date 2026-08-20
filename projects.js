const projects = [

    {
        /* =====================================================
           BASIC INFORMATION
        ===================================================== */

        id: 1,

        title: "Design and Implementation of an IoT-based Electronic Bulletin Board Controlled via Mobile Application",

        subtitle:
            "Design and Implementation of an IoT-based Electronic Bulletin Board Controlled via Mobile Application",

        subject:
            "Do an chuyen nganh",

        semester:
            "2026",

        academicYear:
            "2026",

        startDate:
            "January 2026",

        endDate:
            "July 2026",

        type:
            "IoT & Mobile Application Project",

        teamType:
            "Individual Project",

        teamSize:
            1,

        status:
            "Completed",


        /* =====================================================
           GRADE
        ===================================================== */

        grade:
            "9.0/10",

        achievement:
            "Successfully designed, implemented and tested a complete IoT-based electronic bulletin board system controlled through a mobile application.",


        /* =====================================================
           PROJECT DESCRIPTION
        ===================================================== */

        description:
            "This project focuses on designing and implementing an IoT-based electronic bulletin board that can be controlled remotely through a mobile application. The system integrates an ESP8266 NodeMCU, a 32x8 MAX7219 LED Matrix and a Flutter mobile application. Users can remotely send and update display content through WiFi using HTTP requests without directly interacting with the hardware.",


        /* =====================================================
           PROJECT OBJECTIVE
        ===================================================== */

        objective:
            "To design and develop a practical IoT-based electronic bulletin board that allows users to remotely control and update LED Matrix content through a mobile application while supporting flexible display settings, automation, authentication and emergency notification features.",


        /* =====================================================
           MY ROLE
        ===================================================== */

        role:
            "Sole developer responsible for researching, designing, implementing and testing the entire system, including hardware integration, ESP8266 firmware, HTTP communication, mobile application development and system testing.",


        /* =====================================================
           MY CONTRIBUTIONS
        ===================================================== */

        contributions: [

            "Researched IoT-based electronic display systems and related technologies",

            "Designed the overall system architecture",

            "Designed the communication flow between the mobile application, ESP8266 and LED Matrix",

            "Integrated ESP8266 NodeMCU with MAX7219 LED Matrix 32x8",

            "Configured SPI communication between ESP8266 and LED Matrix",

            "Programmed ESP8266 using Arduino IDE",

            "Configured ESP8266 WiFi connectivity",

            "Built a Web Server on ESP8266 using port 80",

            "Implemented HTTP request processing",

            "Implemented URI query parameter parsing",

            "Developed the mobile control application using Flutter and Dart",

            "Designed the Flutter dashboard user interface",

            "Implemented text transmission from the mobile application to ESP8266",

            "Implemented scrolling text display",

            "Implemented character-by-character display effect",

            "Implemented adjustable scrolling speed",

            "Implemented adjustable LED brightness",

            "Implemented configurable display loops",

            "Implemented Blink display effect",

            "Implemented STOP RUNNING functionality",

            "Implemented real-time clock display",

            "Implemented automatic scheduled content display",

            "Implemented password authentication",

            "Implemented Emergency SOS Mode",

            "Tested WiFi communication between the mobile application and ESP8266",

            "Tested LED Matrix display functions",

            "Tested the Flutter application on an Android device",

            "Debugged hardware and software integration issues",

            "Documented the complete design, implementation and testing process"
        ],


        /* =====================================================
           PROJECT RESULTS
        ===================================================== */

        results: [

            "Successfully developed a functional IoT-based electronic bulletin board prototype",

            "Successfully connected the Flutter mobile application to ESP8266 through a local WiFi network",

            "ESP8266 successfully operated as a Web Server and processed HTTP requests",

            "LED Matrix successfully displayed content sent from the mobile application",

            "Scrolling text operated correctly",

            "Character-by-character display operated correctly",

            "Long text could be displayed through scrolling and character-window mechanisms",

            "Scrolling speed could be adjusted from the mobile application",

            "LED brightness could be adjusted dynamically",

            "The number of text display loops could be configured",

            "Blink effect operated correctly",

            "STOP RUNNING functionality successfully stopped and cleared the display",

            "Real-time clock display was successfully implemented",

            "Automatic scheduled content display was successfully implemented",

            "Password authentication successfully restricted unauthorized control",

            "Emergency Mode successfully displayed SOS alerts with maximum brightness and blinking effects",

            "WiFi connection between ESP8266 and the mobile application operated stably during testing",

            "Flutter application controls responded correctly during testing",

            "The application handled missing input and connection errors",

            "Final project grade: 9.0/10"
        ],


        /* =====================================================
           KEY FEATURES
        ===================================================== */

        features: [

            "Remote LED text control through mobile application",

            "WiFi-based device communication",

            "HTTP-based communication",

            "Scrolling text display",

            "Character-by-character display effect",

            "Adjustable scrolling speed",

            "Adjustable LED brightness",

            "Configurable display loops",

            "Blink effect",

            "Stop display command",

            "Real-time clock display",

            "Automatic scheduled display",

            "Password authentication",

            "Emergency SOS Mode"
        ],


        /* =====================================================
           SKILLS DEVELOPED
        ===================================================== */

        skills: [

            "IoT System Development",

            "Embedded Programming",

            "Mobile Application Development",

            "Hardware Integration",

            "System Integration",

            "Network Programming",

            "HTTP Communication",

            "Client-Server Communication",

            "UI/UX Design",

            "System Architecture Design",

            "Software Testing",

            "Hardware Testing",

            "Debugging",

            "Problem Solving",

            "Technical Documentation"
        ],
       
        /* =====================================================
           TECHNOLOGIES
        ===================================================== */

        technologies: [

            "Flutter",

            "Dart",

            "ESP8266",

            "NodeMCU",

            "MAX7219",

            "LED Matrix 32x8",

            "HTTP",

            "WiFi",

            "SPI"
        ],


        /* =====================================================
           TOOLS USED
        ===================================================== */

        tools: [

            "Arduino IDE",

            "Android Studio",

            "Flutter SDK",

            "Dart",

            "ESP8266WiFi Library",

            "WiFiClient",

            "LEDMatrixDriver"
        ],


        /* =====================================================
           HARDWARE
        ===================================================== */

        hardware: [

            "ESP8266 NodeMCU",

            "MAX7219 LED Matrix 32x8",

            "Power Supply",

            "Connection Wires"
        ],


        /* =====================================================
           PROJECT DOCUMENTS
        ===================================================== */

        reportPdf:
            "pdf/12_dacn-report.pdf",

        presentationPdf:
            "",


        /* =====================================================
           PROJECT COVER
        ===================================================== */

        image:
            "",


        /* =====================================================
           FEATURED PROJECT
        ===================================================== */

        featured:
            true
    },

    {
    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    id: 2,

    title: "Guess The Word Game",

    subtitle:
        "LAN-based Guess The Word Game with Single-player and Multiplayer Modes",

    subject:
        "Lap trinh mang can ban",

    classCode:
        "NT106.P12",

    semester:
        "2024",

    academicYear:
        "2024",

    startDate:
        "",

    endDate:
        "May 2024",

    type:
        "Network Programming Project",

    teamType:
        "Team Project",

    teamSize:
        2,

    status:
        "Completed",


    /* =====================================================
       GRADE
    ===================================================== */

    grade:
        "8/10",

    achievement:
        "Successfully developed a LAN-based word guessing game supporting single-player, multiplayer, chat and network-based interaction between two players.",


    /* =====================================================
       PROJECT DESCRIPTION
    ===================================================== */

    description:
        "This project is a LAN-based Guess The Word game developed for the Basic Network Programming course. The game supports both single-player and multiplayer modes. Players attempt to guess hidden words within a limited time, while the multiplayer mode allows two users to connect through a local network, create or join a game room, communicate through chat and compete against each other.",


    /* =====================================================
       PROJECT OBJECTIVE
    ===================================================== */

    objective:
        "To apply fundamental network programming concepts by developing an interactive word guessing game that supports communication and gameplay between two computers over a LAN environment.",


    /* =====================================================
       MY ROLE
    ===================================================== */

    role:
        "Team member responsible for the main user interface, chat functionality, network design, network connection setup, multiplayer communication and project documentation.",


    /* =====================================================
       MY CONTRIBUTIONS
    ===================================================== */

    contributions: [

        "Designed the main game screen",

        "Designed the overall layout of the main user interface",

        "Designed the word display area",

        "Designed the word input area",

        "Designed correct and incorrect answer feedback components",

        "Tested and optimized the game interface",

        "Developed the chat functionality",

        "Designed the network architecture",

        "Configured network connections",

        "Designed the connection mechanism between two computers for multiplayer mode",

        "Implemented interaction between two players",

        "Contributed to multiplayer communication flow",

        "Prepared presentation slides",

        "Wrote the project report",

        "Completed approximately 50% of the assigned project workload"
    ],


    /* =====================================================
       PROJECT RESULTS
    ===================================================== */

    results: [

        "Developed a playable Guess The Word game",

        "Implemented a single-player game mode",

        "Implemented a two-player multiplayer game mode",

        "Implemented LAN-based communication between two players",

        "Implemented room creation and joining through server IP",

        "Implemented player-to-player chat",

        "Implemented limited-time guessing rounds",

        "Implemented correct and incorrect answer handling",

        "Implemented game win and loss states",

        "Implemented a new-game function",

        "Implemented an instruction screen",

        "Completed the project report and presentation materials"
    ],


    /* =====================================================
       KEY FEATURES
    ===================================================== */

    features: [

        "Single-player mode",

        "Two-player multiplayer mode",

        "LAN-based communication",

        "Client-server communication",

        "Game room creation",

        "Join room using server IP",

        "Player-to-player chat",

        "Limited answer time",

        "Word guessing gameplay",

        "Score management",

        "Correct answer notification",

        "Incorrect answer notification",

        "Win and loss handling",

        "New game function",

        "Instruction screen"
    ],


    /* =====================================================
       SKILLS DEVELOPED
    ===================================================== */

    skills: [

        "Network Programming",

        "Client-Server Communication",

        "Network Design",

        "LAN Communication",

        "Socket Communication",

        "Multiplayer System Design",

        "UI Design",

        "User Interaction Design",

        "Debugging",

        "Software Testing",

        "Teamwork",

        "Technical Documentation",

        "Presentation"
    ],


    /* =====================================================
       KNOWLEDGE APPLIED
    ===================================================== */

    knowledge: [

        "Basic Network Programming",

        "Client-Server Architecture",

        "LAN Networking",

        "Network Connection Setup",

        "Packet Structure",

        "Network Stack",

        "Server-to-Client Communication",

        "Client-to-Server Communication",

        "Multiplayer Game Communication",

        "IP-based Connection",

        "Message Exchange",

        "Game State Management"
    ],


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    technologies: [

        "LAN",

        "Client-Server Architecture",

        "IP Networking"
    ],


    /* =====================================================
       TOOLS USED
    ===================================================== */

    tools: [

        "ChatGPT",

        "Gemini"
    ],


    /* =====================================================
       HARDWARE
    ===================================================== */

    hardware: [],


    /* =====================================================
       PROJECT DOCUMENTS
    ===================================================== */

    reportPdf:
        "pdf/1_ltmcb-report.pdf",

    presentationPdf:
        "",


    /* =====================================================
       PROJECT LINKS
    ===================================================== */

    sourceCode:
        "https://github.com/23521770/23521770_23521768_Exercise_week2/tree/main/PLayGame",

    demoLink:
        "",


    /* =====================================================
       PROJECT COVER
    ===================================================== */

    image:
        "",


    /* =====================================================
       FEATURED PROJECT
    ===================================================== */

    featured:
        true
},

{
    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    id: 3,

    title:
        "Linux Web, DNS & Database Server Deployment",

    subtitle:
        "Deploy 2 Web Applications to the Same Linux Server (Web Server and DNS Server)",

    subject:
        "QUAN TRI MANG VA HE THONG",

    classCode:
        "NT132.P23",

    semester:
        "",

    academicYear:
        "",

    startDate:
        "",

    endDate:
        "",

    type:
        "Network & System Administration Project",

    teamType:
        "Team Project",

    teamSize:
        3,

    status:
        "Completed",


    /* =====================================================
       GRADE
    ===================================================== */

    grade:
        "8.5/10",

    achievement:
        "Successfully deployed a multi-server environment consisting of Web Server, DNS Server and Database Server, hosting two independent PHP web applications with separate domain names and databases.",


    /* =====================================================
       PROJECT DESCRIPTION
    ===================================================== */

    description:
        "This project focuses on deploying two web applications in a Linux-based network environment. The system consists of an Apache Web Server, a BIND9 DNS Server and a MySQL Database Server running on separate virtual machines. Apache VirtualHost is used to host two independent websites, BIND9 provides internal domain name resolution for site1.test and site2.test, and MySQL provides separate databases and users for each web application.",


    /* =====================================================
       PROJECT OBJECTIVE
    ===================================================== */

    objective:
        "To design and deploy a Linux-based server infrastructure that allows two independent web applications to be accessed through domain names, served by Apache VirtualHost, resolved through an internal DNS Server and connected to separate MySQL databases.",


    /* =====================================================
       MY ROLE
    ===================================================== */

    role:
        "Team member in a three-person network and system administration project involving Linux server deployment, Web Server configuration, DNS configuration, Database Server configuration, system integration, testing and technical documentation.",


    /* =====================================================
       MY CONTRIBUTIONS
       Report does not specify individual assignments,
       so contribution wording remains team-level.
    ===================================================== */

    contributions: [

        "Participated in designing the overall server architecture",

        "Participated in configuring virtual machines using Bridged Adapter networking",

        "Participated in deploying Ubuntu Linux server environments",

        "Participated in installing and configuring Apache Web Server",

        "Participated in configuring PHP support on Apache",

        "Participated in configuring Apache VirtualHost for multiple websites",

        "Participated in deploying two independent web applications on the Web Server",

        "Participated in configuring internal DNS priority on Linux clients",

        "Participated in installing and configuring BIND9 DNS Server",

        "Participated in creating DNS zones for site1.test and site2.test",

        "Participated in configuring authoritative DNS records",

        "Participated in testing BIND9 zone configuration",

        "Participated in installing and configuring MySQL Server",

        "Participated in configuring MySQL for remote connections",

        "Participated in creating separate databases for the two websites",

        "Participated in creating database users and assigning database privileges",

        "Participated in configuring PHP applications to connect to the remote MySQL server",

        "Participated in importing sample SQL data",

        "Participated in testing communication between Web Server, DNS Server and Database Server",

        "Participated in documenting the system deployment and configuration process"
    ],


    /* =====================================================
       PROJECT RESULTS
    ===================================================== */

    results: [

        "Successfully deployed an Apache Web Server on Ubuntu Linux",

        "Successfully hosted two independent web applications on the same Apache server",

        "Successfully configured VirtualHost for site1.test and site2.test",

        "Successfully deployed a separate BIND9 DNS Server",

        "Successfully configured internal DNS resolution for both web applications",

        "Successfully created DNS zone files for site1.test and site2.test",

        "Successfully configured NS and A records for the internal domains",

        "Successfully validated BIND9 configuration using named-checkzone and named-checkconf",

        "Successfully deployed a separate MySQL Database Server",

        "Successfully configured MySQL to accept remote network connections",

        "Successfully created two independent databases: dtb1 and dtb2",

        "Successfully created dedicated database users for each website",

        "Successfully assigned database privileges to each website account",

        "Successfully configured PHP applications to connect to the remote Database Server",

        "Successfully prepared database import commands for both applications",

        "Successfully integrated Web Server, DNS Server and Database Server into a multi-server network architecture",

        "Final project grade: 8.5/10"
    ],


    /* =====================================================
       KEY FEATURES
    ===================================================== */

    features: [

        "Two web applications hosted on one Apache Web Server",

        "Separate domain name for each web application",

        "Apache VirtualHost configuration",

        "Internal DNS resolution",

        "Dedicated BIND9 DNS Server",

        "Dedicated MySQL Database Server",

        "Separate database for each website",

        "Separate database user for each website",

        "Remote MySQL connections",

        "PHP-to-MySQL database connectivity",

        "DNS zone management",

        "DNS configuration validation",

        "LAN-based server communication",

        "Multi-server network architecture",

        "Virtual machine networking"
    ],


    /* =====================================================
       SKILLS DEVELOPED
    ===================================================== */

    skills: [

        "Linux System Administration",

        "Network Administration",

        "Web Server Administration",

        "DNS Server Administration",

        "Database Server Administration",

        "Server Deployment",

        "Virtual Machine Configuration",

        "Network Configuration",

        "Service Integration",

        "Command Line Administration",

        "Database Configuration",

        "Network Troubleshooting",

        "System Testing",

        "Problem Solving",

        "Technical Documentation",

        "Teamwork"
    ],


    /* =====================================================
       KNOWLEDGE APPLIED
    ===================================================== */

    knowledge: [

        "Linux Server Administration",

        "Client-Server Architecture",

        "Web Server Architecture",

        "DNS Architecture",

        "Database Server Architecture",

        "Apache VirtualHost",

        "Domain Name Resolution",

        "DNS Zones",

        "DNS SOA Records",

        "DNS NS Records",

        "DNS A Records",

        "BIND9 Configuration",

        "HTTP Protocol",

        "PHP Web Applications",

        "MySQL Database",

        "Database User Management",

        "Database Privileges",

        "Remote Database Connection",

        "PDO Database Connection",

        "LAN Networking",

        "IP Addressing",

        "Bridged Adapter Networking",

        "Multi-server Architecture"
    ],


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    technologies: [

        "Ubuntu Linux",

        "Apache",

        "PHP",

        "BIND9",

        "DNS",

        "MySQL",

        "PDO",

        "HTTP",

        "LAN",

        "IPv4"
    ],


    /* =====================================================
       TOOLS USED
    ===================================================== */

    tools: [

        "Ubuntu Terminal",

        "Apache2",

        "BIND9",

        "bind9utils",

        "dnsutils",

        "MySQL Server",

        "PHP",

        "nano",

        "systemctl",

        "named-checkzone",

        "named-checkconf"
    ],


    /* =====================================================
       SYSTEM COMPONENTS
    ===================================================== */

    hardware: [

        "Web Server Virtual Machine",

        "DNS Server Virtual Machine",

        "Database Server Virtual Machine",

        "LAN Network",

        "Client Device"
    ],


    /* =====================================================
       SYSTEM ARCHITECTURE
    ===================================================== */

    architecture: [

        "Web Server: 192.168.170.247 - Apache",

        "DNS Server: 192.168.170.89 - BIND9",

        "Database Server: 192.168.170.182 - MySQL",

        "Domain 1: site1.test",

        "Domain 2: site2.test",

        "Database 1: dtb1",

        "Database 2: dtb2"
    ],


    /* =====================================================
       PROJECT DOCUMENT
    ===================================================== */

    reportPdf:
        "pdf/2_qtm-report.pdf",

    presentationPdf:
        "",


    /* =====================================================
       PROJECT COVER
    ===================================================== */

    image:
        "",


    /* =====================================================
       FEATURED PROJECT
    ===================================================== */

    featured:
        true
},

{
    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    id: 4,

    title:
        "IoT LED Matrix Control System",

    subtitle:
        "Hiển thị chạy chữ trên LED Matrix 32x8 sử dụng ESP8266 qua Mobile App",

    subject:
        "He thong nhung mang khong day",

    classCode:
        "NT131.P22",

    semester:
        "",

    academicYear:
        "",

    startDate:
        "",

    endDate:
        "",

    type:
        "Embedded Systems & IoT Project",

    teamType:
        "Team Project",

    teamSize:
        4,

    status:
        "Completed",


    /* =====================================================
       GRADE
    ===================================================== */

    grade:
        "10.0/10",

    achievement:
        "Successfully designed, implemented and tested a complete IoT-based LED Matrix control system using ESP8266 and a Flutter mobile application, achieving a final project grade of 10.0/10.",


    /* =====================================================
       PROJECT DESCRIPTION
    ===================================================== */

    description:
        "This project focuses on designing and implementing an IoT-based system that displays scrolling text on a 32x8 MAX7219 LED Matrix. A Flutter mobile application is used as the control interface, while an ESP8266 NodeMCU operates as a WiFi-enabled Web Server that receives HTTP requests, processes display parameters and controls the LED Matrix through SPI communication.",


    /* =====================================================
       PROJECT OBJECTIVE
    ===================================================== */

    objective:
        "To build a complete embedded and wireless communication system that allows users to remotely control text displayed on a 32x8 LED Matrix through a mobile application, while supporting adjustable scrolling speed, brightness, repetition, blinking and stop functions.",


    /* =====================================================
       MY ROLE
    ===================================================== */

    role:
        "Team member in a four-person embedded systems and wireless networking project involving ESP8266 programming, Flutter mobile application development, hardware integration, HTTP communication, system testing and technical documentation.",


    /* =====================================================
       MY CONTRIBUTIONS
       The report does not provide an individual task
       assignment, so these are written at team-project level.
    ===================================================== */

    contributions: [

        "Participated in designing the overall IoT system architecture",

        "Participated in integrating ESP8266 NodeMCU with the MAX7219 LED Matrix",

        "Participated in configuring WiFi connectivity on ESP8266",

        "Participated in setting up a Web Server on ESP8266 using port 80",

        "Participated in handling HTTP requests from the mobile application",

        "Participated in parsing URL query parameters",

        "Participated in implementing text processing for LED Matrix display",

        "Participated in implementing scrolling text functionality",

        "Participated in implementing adjustable scrolling speed",

        "Participated in implementing adjustable LED brightness",

        "Participated in implementing configurable text repetition loops",

        "Participated in implementing Blink mode",

        "Participated in implementing Stop display functionality",

        "Participated in developing the Flutter mobile control application",

        "Participated in designing the Flutter user interface",

        "Participated in sending control parameters from Flutter to ESP8266 through HTTP",

        "Participated in testing communication between the mobile application and ESP8266",

        "Participated in testing LED Matrix display behavior",

        "Participated in debugging hardware, WiFi and HTTP communication issues",

        "Participated in documenting the system design and implementation process"
    ],


    /* =====================================================
       PROJECT RESULTS
    ===================================================== */

    results: [

        "Successfully developed a complete IoT-based LED Matrix control system",

        "Successfully connected ESP8266 NodeMCU to WiFi",

        "Successfully configured ESP8266 as a Web Server",

        "Successfully received HTTP requests from the Flutter application",

        "Successfully controlled a 32x8 MAX7219 LED Matrix through ESP8266",

        "Successfully displayed scrolling text from right to left",

        "Successfully implemented dynamic text input from the mobile application",

        "Successfully implemented adjustable scrolling speed",

        "Successfully implemented LED brightness control from 0 to 15",

        "Successfully implemented configurable text repetition loops",

        "Successfully implemented Blink mode",

        "Successfully implemented Stop display functionality",

        "Successfully tested different text lengths",

        "Successfully tested Blink, Stop and Loop functions",

        "System operated stably within the local WiFi network",

        "Final project grade: 10.0/10"
    ],


    /* =====================================================
       KEY FEATURES
    ===================================================== */

    features: [

        "Remote text control through Flutter mobile application",

        "WiFi-based communication",

        "ESP8266 Web Server",

        "HTTP GET communication",

        "Scrolling text display",

        "Dynamic text input",

        "Adjustable scrolling speed",

        "Adjustable LED brightness",

        "Configurable repetition loops",

        "Blink mode",

        "Stop display command",

        "URL parameter processing",

        "Custom 8x8 bitmap font",

        "Real-time LED Matrix control",

        "Client-server communication"
    ],


    /* =====================================================
       SKILLS DEVELOPED
    ===================================================== */

    skills: [

        "Embedded Programming",

        "IoT System Development",

        "Mobile Application Development",

        "Hardware Integration",

        "Wireless Communication",

        "HTTP Communication",

        "Client-Server Communication",

        "Network Programming",

        "Flutter UI Development",

        "System Integration",

        "Software Testing",

        "Hardware Testing",

        "Debugging",

        "Problem Solving",

        "Technical Documentation",

        "Teamwork"
    ],


    /* =====================================================
       KNOWLEDGE APPLIED
    ===================================================== */

    knowledge: [

        "Embedded Systems",

        "Internet of Things (IoT)",

        "Wireless Networking",

        "ESP8266 NodeMCU",

        "LED Matrix",

        "MAX7219",

        "SPI Communication",

        "WiFi Communication",

        "HTTP Protocol",

        "HTTP GET Requests",

        "Client-Server Architecture",

        "Web Server",

        "URL Query Parameters",

        "Bitmap Font Rendering",

        "Pixel-based Display Control",

        "Mobile Application Architecture",

        "Flutter Widget-based UI",

        "Asynchronous HTTP Communication",

        "IoT System Testing"
    ],


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    technologies: [

        "ESP8266",

        "NodeMCU",

        "Flutter",

        "Dart",

        "MAX7219",

        "LED Matrix 32x8",

        "WiFi",

        "HTTP",

        "SPI",

        "C/C++"
    ],


    /* =====================================================
       TOOLS USED
    ===================================================== */

    tools: [

        "Arduino IDE",

        "Flutter SDK",

        "Dart",

        "LEDMatrixDriver",

        "ESP8266WiFi Library",

        "WiFiClient",

        "Flutter Material",

        "HTTP Package"
    ],


    /* =====================================================
       HARDWARE
    ===================================================== */

    hardware: [

        "ESP8266 NodeMCU",

        "MAX7219 LED Matrix 32x8",

        "4 x 8x8 LED Matrix Modules",

        "Connection Wires",

        "Mobile Device",

        "WiFi Network"
    ],


    /* =====================================================
       SYSTEM ARCHITECTURE
    ===================================================== */

    architecture: [

        "Flutter App - Client",

        "WiFi - Wireless Communication",

        "HTTP - Application Communication Protocol",

        "ESP8266 NodeMCU - Web Server and Main Controller",

        "SPI - Hardware Communication",

        "MAX7219 LED Matrix 32x8 - Display Output"
    ],


    /* =====================================================
       LIMITATIONS
    ===================================================== */

    limitations: [

        "The system currently operates only within a local LAN/WiFi network",

        "HTTP GET communication does not provide strong security",

        "The mobile application does not yet display real-time device status feedback"
    ],


    /* =====================================================
       FUTURE DEVELOPMENT
    ===================================================== */

    futureDevelopment: [

        "Add real-time LED status feedback to the mobile application",

        "Add a history of previously sent content",

        "Replace HTTP GET with POST or WebSocket",

        "Support remote control through the Internet",

        "Integrate Firebase or MQTT",

        "Support simple images and icons in addition to text"
    ],


    /* =====================================================
       PROJECT DOCUMENT
    ===================================================== */

    reportPdf:
        "pdf/3_htn-report.pdf",

    presentationPdf:
        "",


    /* =====================================================
       PROJECT COVER
    ===================================================== */

    image:
        "",


    /* =====================================================
       FEATURED PROJECT
    ===================================================== */

    featured:
        true
},

{
    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    id: 5,

    title:
        "Federated Learning System with FedML",

    subtitle:
        "Xây dựng hệ thống Federated Learning trên nền tảng FedML",

    subject:
        "He tinh toan phan bo",

    classCode:
        "NT533.Q12",

    semester:
        "",

    academicYear:
        "",

    startDate:
        "",

    endDate:
        "",

    type:
        "Distributed Computing & Machine Learning Project",

    teamType:
        "Team Project",

    teamSize:
        3,

    status:
        "Completed",


    /* =====================================================
       GRADE
    ===================================================== */

    grade:
        "9.5/10",

    achievement:
        "Successfully built and evaluated a practical Federated Learning system on Microsoft Azure using FedML, achieving stable distributed training across multiple clients with a final project grade of 9.5/10.",


    /* =====================================================
       PROJECT DESCRIPTION
    ===================================================== */

    description:
        "This project focuses on building and evaluating a practical Federated Learning system using the FedML framework on Microsoft Azure. The system follows a distributed client-server architecture in which each node runs on an independent Ubuntu virtual machine. Local training is performed at client nodes using private local data, while only model parameters are exchanged with the server and aggregated using the FedAvg algorithm.",


    /* =====================================================
       PROJECT OBJECTIVE
    ===================================================== */

    objective:
        "To design and deploy a distributed Federated Learning system that preserves data privacy, supports multiple independent training nodes, performs parameter aggregation using FedAvg, and evaluates model convergence and accuracy using Logistic Regression and CNN models on the MNIST dataset.",


    /* =====================================================
       MY ROLE
    ===================================================== */

    role:
        "Team member in a three-person distributed computing and Federated Learning project involving cloud infrastructure deployment, FedML configuration, distributed training, model evaluation, experiment monitoring and technical documentation.",


    /* =====================================================
       MY CONTRIBUTIONS
       The report does not specify individual task
       assignments, so contribution wording remains
       team-project level.
    ===================================================== */

    contributions: [

        "Participated in researching Federated Learning concepts and architecture",

        "Participated in designing the distributed client-server training architecture",

        "Participated in deploying FedML nodes on Microsoft Azure virtual machines",

        "Participated in configuring Ubuntu environments for distributed training",

        "Participated in installing and configuring the FedML framework",

        "Participated in configuring gRPC communication between server and client nodes",

        "Participated in configuring horizontal cross-silo Federated Learning",

        "Participated in configuring the FedAvg aggregation algorithm",

        "Participated in preparing MNIST as the experimental dataset",

        "Participated in configuring distributed data partitioning",

        "Participated in configuring learning rate, batch size, epochs and communication rounds",

        "Participated in deploying Logistic Regression experiments with 1 server and 2 clients",

        "Participated in deploying CNN experiments with 1 server and 4 clients",

        "Participated in monitoring training metrics using Weights & Biases",

        "Participated in comparing Test Accuracy and Test Loss across multiple experimental runs",

        "Participated in evaluating training convergence and execution time",

        "Participated in troubleshooting FedML and cloud deployment issues",

        "Participated in documenting system architecture, experimental setup and results"
    ],


    /* =====================================================
       PROJECT RESULTS
    ===================================================== */

    results: [

        "Successfully built a practical Federated Learning system using FedML",

        "Successfully deployed independent server and client nodes on Microsoft Azure virtual machines",

        "Successfully implemented distributed client-server training",

        "Successfully preserved local data privacy by exchanging only model parameters",

        "Successfully configured FedAvg as the model aggregation algorithm",

        "Successfully configured gRPC as the communication backend",

        "Successfully trained Logistic Regression on MNIST with 1 server and 2 clients",

        "Successfully trained CNN on MNIST with 1 server and 4 clients",

        "Logistic Regression achieved Test Accuracy between 0.7953 and 0.8173",

        "Best Logistic Regression result reached Test Accuracy of 0.8173",

        "Best Logistic Regression configuration achieved 0.8173 accuracy in approximately 17.36 seconds",

        "CNN achieved Test Accuracy between 0.6748 and 0.7182",

        "Best CNN result reached Test Accuracy of 0.7182",

        "Best CNN run required approximately 197.11 seconds",

        "Successfully monitored Test Accuracy and Test Loss using WandB",

        "Demonstrated good scalability through cloud-based distributed nodes",

        "Final project grade: 9.5/10"
    ],


    /* =====================================================
       KEY FEATURES
    ===================================================== */

    features: [

        "Federated Learning architecture",

        "Distributed client-server training",

        "Cross-silo Federated Learning",

        "Horizontal Federated Learning",

        "Local model training",

        "Global model aggregation",

        "FedAvg aggregation algorithm",

        "gRPC communication",

        "Multiple distributed clients",

        "Independent Azure virtual machines",

        "Privacy-preserving training",

        "MNIST dataset training",

        "Logistic Regression experiments",

        "CNN experiments",

        "Real-time experiment monitoring",

        "Accuracy and loss visualization",

        "Hyperparameter experimentation"
    ],


    /* =====================================================
       SKILLS DEVELOPED
    ===================================================== */

    skills: [

        "Distributed Computing",

        "Federated Learning",

        "Machine Learning",

        "Deep Learning",

        "Cloud Computing",

        "Azure Virtual Machine Deployment",

        "Distributed System Design",

        "Client-Server Architecture",

        "Model Training",

        "Hyperparameter Tuning",

        "Experiment Tracking",

        "Performance Evaluation",

        "Data Analysis",

        "Troubleshooting",

        "Linux Administration",

        "Technical Documentation",

        "Teamwork",

        "Problem Solving"
    ],


    /* =====================================================
       KNOWLEDGE APPLIED
    ===================================================== */

    knowledge: [

        "Federated Learning",

        "Distributed Machine Learning",

        "Cross-silo Federated Learning",

        "Horizontal Federated Learning",

        "Client-Server Architecture",

        "Local Training",

        "Global Model",

        "Model Parameter Aggregation",

        "Federated Averaging (FedAvg)",

        "gRPC Communication",

        "Distributed Training Rounds",

        "Communication Rounds",

        "Machine Learning Model Convergence",

        "Logistic Regression",

        "Convolutional Neural Network",

        "MNIST Dataset",

        "Non-IID Data Partitioning",

        "Learning Rate",

        "Batch Size",

        "Epochs",

        "Test Accuracy",

        "Test Loss",

        "Cloud Infrastructure",

        "Virtual Machines",

        "MLOps Monitoring"
    ],


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    technologies: [

        "FedML",

        "Python",

        "Microsoft Azure",

        "Ubuntu Linux",

        "gRPC",

        "FedAvg",

        "MNIST",

        "Logistic Regression",

        "CNN",

        "Weights & Biases",

        "SGD",

        "YAML"
    ],


    /* =====================================================
       TOOLS USED
    ===================================================== */

    tools: [

        "FedML Framework",

        "Microsoft Azure",

        "Azure Virtual Machines",

        "Weights & Biases",

        "Python",

        "pip",

        "Ubuntu Terminal",

        "Bash",

        "fedml_config.yaml",

        "grpc_ipconfig.csv"
    ],


    /* =====================================================
       SYSTEM ARCHITECTURE
    ===================================================== */

    architecture: [

        "FedML Core - Low-level distributed communication",

        "FedML API - Federated Learning configuration and orchestration",

        "Application Layer - Logistic Regression and CNN experiments",

        "Server Node - Rank 0",

        "Client Nodes - Rank 1 and above",

        "gRPC - Communication backend",

        "FedAvg - Model aggregation",

        "Microsoft Azure Virtual Machines - Distributed infrastructure",

        "WandB - Experiment monitoring"
    ],


    /* =====================================================
       EXPERIMENTS
    ===================================================== */

    experiments: [

        "Logistic Regression - 1 Server, 2 Clients",

        "CNN - 1 Server, 4 Clients",

        "Dataset: MNIST",

        "Training type: cross_silo",

        "Scenario: horizontal",

        "Federated optimizer: FedAvg",

        "Communication rounds: up to 50",

        "Monitoring metrics: Test Accuracy and Test Loss"
    ],


    /* =====================================================
       LIMITATIONS
    ===================================================== */

    limitations: [

        "Limited budget for MLOps infrastructure",

        "FedML documentation was not sufficiently extensive for some deployment issues",

        "Encountered AWS Access Key authentication errors when attempting to access S3 storage"
    ],


    /* =====================================================
       FUTURE DEVELOPMENT
    ===================================================== */

    futureDevelopment: [

        "Experiment with aggregation algorithms such as FedOpt and FedNova",

        "Evaluate the system on more realistic and complex datasets",

        "Study communication efficiency in larger distributed environments",

        "Evaluate fault tolerance with more clients",

        "Optimize distributed training performance",

        "Explore more advanced Federated Learning scenarios"
    ],


    /* =====================================================
       PROJECT DOCUMENT
    ===================================================== */

    reportPdf:
        "pdf/4_httpb-report.pdf",

    presentationPdf:
        "",


    /* =====================================================
       PROJECT COVER
    ===================================================== */

    image:
        "",


    /* =====================================================
       FEATURED PROJECT
    ===================================================== */

    featured:
        true
},
{
    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    id: 6,

    title:
        "Wi-Fi Network Performance Monitoring & Analysis",

    subtitle:
        "Giám sát và phân tích hiệu năng mạng Wi-Fi trong môi trường lớp học",

    subject:
        "Danh gia hieu nang he thong may tinh",

    classCode:
        "NT531.Q12",

    semester:
        "",

    academicYear:
        "",

    startDate:
        "",

    endDate:
        "",

    type:
        "Network Performance & Monitoring Project",

    teamType:
        "Team Project",

    teamSize:
        2,

    status:
        "Completed",


    /* =====================================================
       GRADE
    ===================================================== */

    grade:
        "8.0/10",

    achievement:
        "Successfully built a practical Wi-Fi performance monitoring and analysis environment using iPerf3, Wireshark, Speedtest, inSSIDer and PRTG Network Monitor, with a final project grade of 8.0/10.",


    /* =====================================================
       PROJECT DESCRIPTION
    ===================================================== */

    description:
        "This project focuses on monitoring and analyzing Wi-Fi network performance in a real classroom environment. The experimental system consists of one Access Point, one Server and one Client. Multiple monitoring and measurement tools including iPerf3, Wireshark, Speedtest, inSSIDer and PRTG Network Monitor were used to evaluate throughput, latency, jitter, packet loss, signal quality, retransmission and system resource usage under different network conditions.",


    /* =====================================================
       PROJECT OBJECTIVE
    ===================================================== */

    objective:
        "To evaluate the stability and performance of a classroom Wi-Fi network by measuring key network metrics under different distances, frequency bands and traffic loads, while also assessing the capability of PRTG Network Monitor to detect and alert network congestion.",


    /* =====================================================
       MY ROLE
    ===================================================== */

    role:
        "Team member in a two-person network performance evaluation project involving Wi-Fi measurement, traffic generation, packet analysis, network monitoring, congestion detection, experimental data analysis and technical documentation.",


    /* =====================================================
       MY CONTRIBUTIONS
       The report does not include individual task
       assignments, so wording remains team-level.
    ===================================================== */

    contributions: [

        "Participated in designing the Wi-Fi performance testing architecture",

        "Participated in configuring the Server and Client test environment",

        "Participated in configuring the Access Point-based test network",

        "Participated in installing and configuring iPerf3",

        "Participated in configuring iPerf3 Server and Client modes",

        "Participated in measuring TCP throughput",

        "Participated in measuring UDP performance",

        "Participated in testing network performance at different distances from the Access Point",

        "Participated in comparing Wi-Fi performance between 2.4 GHz and 5 GHz",

        "Participated in measuring latency, jitter and packet loss",

        "Participated in analyzing Wi-Fi channel interference using inSSIDer",

        "Participated in measuring Internet performance using Speedtest",

        "Participated in capturing and analyzing network packets using Wireshark",

        "Participated in analyzing TCP retransmissions and lost segments",

        "Participated in configuring PRTG Network Monitor",

        "Participated in configuring SNMP monitoring sensors",

        "Participated in monitoring CPU, RAM, uptime and network traffic",

        "Participated in creating PRTG warning thresholds for congestion detection",

        "Participated in generating network traffic to simulate congestion",

        "Participated in analyzing performance changes during baseline, high-load and recovery periods",

        "Participated in documenting experimental procedures and results"
    ],


    /* =====================================================
       PROJECT RESULTS
    ===================================================== */

    results: [

        "Successfully deployed a Wi-Fi performance testing environment with Server, Client and Access Point",

        "Successfully measured throughput, latency, jitter and packet loss using multiple tools",

        "Initial Speedtest measured approximately 218.11 Mbps download and 361.09 Mbps upload",

        "Initial packet loss was measured at 0.0%",

        "Initial latency was approximately 26.84 ms",

        "Observed that throughput decreased as the Client moved farther away from the Access Point",

        "iPerf3 throughput decreased from approximately 48.8 Mbps near the Access Point to approximately 31.6 Mbps at the farthest tested position",

        "Confirmed that client position and signal strength significantly affect Wi-Fi throughput",

        "Confirmed that 5 GHz achieved better real-world performance than 2.4 GHz",

        "5 GHz showed higher throughput, lower interference and lower jitter than 2.4 GHz",

        "Observed significant channel overlap and interference on the 2.4 GHz band",

        "Observed cleaner channels and lower interference on the 5 GHz band",

        "Measured approximately 90.8 Mbps TCP upload throughput on 5 GHz",

        "Measured approximately 35.9 Mbps TCP upload throughput on 2.4 GHz",

        "Observed average throughput of approximately 25–30 Mbps during the 15-minute monitoring scenario",

        "Server retransmission rate remained below approximately 0.5% during normal monitoring",

        "Speedtest during monitoring showed latency of approximately 14.08 ms and 0% packet loss",

        "PRTG successfully monitored device uptime, ping latency, CPU load, Wi-Fi traffic and physical memory",

        "Successfully simulated temporary network congestion under high traffic load",

        "PRTG successfully detected increased latency during congestion",

        "PRTG generated warning conditions when latency exceeded configured thresholds",

        "Wireshark confirmed increased RTT and retransmissions during congestion",

        "Network performance recovered after high-load traffic ended",

        "Final project grade: 8.0/10"
    ],


    /* =====================================================
       KEY FEATURES
    ===================================================== */

    features: [

        "Wi-Fi performance monitoring",

        "TCP throughput testing",

        "UDP performance testing",

        "Latency measurement",

        "Jitter measurement",

        "Packet loss measurement",

        "TCP retransmission analysis",

        "Wi-Fi signal strength analysis",

        "Channel interference analysis",

        "2.4 GHz and 5 GHz comparison",

        "Distance-based performance testing",

        "Long-duration traffic monitoring",

        "Congestion simulation",

        "Congestion detection",

        "PRTG threshold alerts",

        "SNMP monitoring",

        "CPU monitoring",

        "RAM monitoring",

        "Network traffic monitoring",

        "Packet capture and analysis"
    ],


    /* =====================================================
       SKILLS DEVELOPED
    ===================================================== */

    skills: [

        "Network Performance Analysis",

        "Wi-Fi Performance Testing",

        "Network Monitoring",

        "Packet Analysis",

        "Network Troubleshooting",

        "Traffic Analysis",

        "TCP/IP Analysis",

        "Performance Benchmarking",

        "Network Congestion Analysis",

        "QoS Evaluation",

        "Experimental Design",

        "Data Analysis",

        "Network Tool Configuration",

        "Technical Documentation",

        "Teamwork",

        "Problem Solving"
    ],


    /* =====================================================
       KNOWLEDGE APPLIED
    ===================================================== */

    knowledge: [

        "Wireless Networking",

        "Wi-Fi Performance",

        "2.4 GHz Wi-Fi",

        "5 GHz Wi-Fi",

        "Access Point Architecture",

        "Client-Server Architecture",

        "TCP Protocol",

        "UDP Protocol",

        "Throughput",

        "Bandwidth",

        "Latency",

        "Round Trip Time",

        "Jitter",

        "Packet Loss",

        "TCP Retransmission",

        "RSSI",

        "Signal Strength",

        "SNR",

        "Channel Utilization",

        "Channel Interference",

        "Network Congestion",

        "Quality of Service",

        "SNMP Monitoring",

        "ICMP Ping",

        "Network Performance Monitoring"
    ],


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    technologies: [

        "Wi-Fi",

        "TCP/IP",

        "TCP",

        "UDP",

        "SNMP",

        "ICMP",

        "2.4 GHz",

        "5 GHz",

        "Windows Networking"
    ],


    /* =====================================================
       TOOLS USED
    ===================================================== */

    tools: [

        "iPerf3",

        "Wireshark",

        "PRTG Network Monitor",

        "Speedtest by Ookla",

        "inSSIDer",

        "Command Prompt",

        "PowerShell",

        "Windows Firewall",

        "SNMP"
    ],


    /* =====================================================
       SYSTEM ARCHITECTURE
    ===================================================== */

    architecture: [

        "Access Point - Wireless network connection",

        "Server PC - iPerf3 Server",

        "Server PC - PRTG Network Monitor",

        "Server PC - Wireshark packet analysis",

        "Client PC - iPerf3 Client",

        "Client PC - Speedtest",

        "Client PC - inSSIDer",

        "Wi-Fi - Communication medium"
    ],


    /* =====================================================
       EXPERIMENTS
    ===================================================== */

    experiments: [

        "Scenario 1 - Wi-Fi performance at different distances from the Access Point",

        "Scenario 2 - Comparison of 2.4 GHz and 5 GHz Wi-Fi bands",

        "Scenario 3 - Short-term throughput, latency and traffic monitoring",

        "Scenario 4 - Network congestion detection and alert testing"
    ],


    /* =====================================================
       LIMITATIONS
    ===================================================== */

    limitations: [

        "Measurement results were affected by physical interference such as walls, furniture and moving people",

        "Limited hardware prevented the planned Load Test scenario from being fully implemented",

        "Wi-Fi interference and channel conditions changed depending on the time of day",

        "Grafana installation and integration was not completed"
    ],


    /* =====================================================
       FUTURE DEVELOPMENT
    ===================================================== */

    futureDevelopment: [

        "Expand the test environment with more Access Points",

        "Add more Client devices to simulate a crowded classroom",

        "Integrate Grafana Dashboard for real-time visualization",

        "Compare wired and wireless network performance",

        "Perform larger-scale congestion and load testing",

        "Develop longer-term monitoring and reporting"
    ],


    /* =====================================================
       PROJECT DOCUMENT
    ===================================================== */

    reportPdf:
        "pdf/5_dghn-report.pdf",

    presentationPdf:
        "",


    /* =====================================================
       PROJECT COVER
    ===================================================== */

    image:
        "",


    /* =====================================================
       FEATURED PROJECT
    ===================================================== */

    featured:
        true
},
{
    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    id: 7,

    title:
        "Online Bookstore E-Commerce App",

    subtitle:
        "Android E-Commerce Application for Online Book Sales",

    subject:
        "Mobile Application Development",

    classCode:
        "",

    semester:
        "",

    academicYear:
        "2025",

    startDate:
        "",

    endDate:
        "2025",

    type:
        "Android Mobile Application Project",

    teamType:
        "Team Project",

    teamSize:
        5,

    status:
        "Completed",


    /* =====================================================
       GRADE
    ===================================================== */

    grade:
        "9.5/10",

    achievement:
        "Successfully designed and developed a complete Android e-commerce bookstore application with customer, sales staff, delivery staff and administrator workflows, achieving a final project grade of 9.5/10.",


    /* =====================================================
       PROJECT DESCRIPTION
    ===================================================== */

    description:
        "This project focuses on designing and developing an Android-based e-commerce application for online book sales. The application provides a complete bookstore workflow including account management, product search, filtering, shopping cart, ordering, vouchers, reviews and order tracking. In addition to customer features, the system includes dedicated interfaces and functions for sales staff, delivery staff and administrators.",


    /* =====================================================
       PROJECT OBJECTIVE
    ===================================================== */

    objective:
        "To build a user-friendly Android e-commerce bookstore application that allows customers to search, view and purchase books conveniently while also supporting product management, order processing, delivery management, customer management, employee management, promotions and business reporting.",


    /* =====================================================
       MY ROLE
    ===================================================== */

    role:
        "Team member in a five-person Android application development project involving system analysis, UI/UX design, Android frontend development, Java application logic, SQLite database integration, testing and project documentation.",


    /* =====================================================
       MY CONTRIBUTIONS
       The report does not provide individual task
       assignments for each member, so contributions
       are written at team-project level.
    ===================================================== */

    contributions: [

        "Participated in analyzing requirements for an online bookstore application",

        "Participated in researching existing e-commerce platforms such as Tiki and Fahasa",

        "Participated in defining functional and non-functional requirements",

        "Participated in designing the system Use Case Diagram",

        "Participated in designing the Entity Relationship Diagram",

        "Participated in designing the Relational Data Model",

        "Participated in designing Activity Diagrams for major business processes",

        "Participated in designing the Android application UI/UX",

        "Participated in implementing Android interfaces using Android Studio",

        "Participated in developing application logic using Java",

        "Participated in connecting application screens with SQLite database operations",

        "Participated in implementing user authentication functions",

        "Participated in implementing product browsing and searching",

        "Participated in implementing filtering and sorting functions",

        "Participated in implementing shopping cart operations",

        "Participated in implementing checkout and order creation",

        "Participated in implementing voucher functionality",

        "Participated in implementing product review functionality",

        "Participated in implementing order status management",

        "Participated in implementing administrative management interfaces",

        "Participated in testing the application using Android Emulator and Genymotion",

        "Participated in managing source code through Git and GitHub",

        "Participated in documenting system analysis, design and implementation"
    ],


    /* =====================================================
       PROJECT RESULTS
    ===================================================== */

    results: [

        "Completed 100% of system analysis and design",

        "Completed 100% of frontend interface development",

        "Completed application backend logic processing",

        "Successfully developed an Android-based online bookstore application",

        "Implemented account registration and login",

        "Implemented password reset interface",

        "Implemented book catalog browsing",

        "Implemented book search functionality",

        "Implemented book filtering by price and category",

        "Implemented product detail pages",

        "Implemented product rating and review features",

        "Implemented shopping cart management",

        "Implemented product quantity modification in cart",

        "Implemented product removal from cart",

        "Implemented direct purchase and cart-based purchase flows",

        "Implemented checkout workflow",

        "Implemented shipping address management",

        "Implemented voucher selection and application",

        "Implemented order creation and order confirmation",

        "Implemented customer order tracking",

        "Implemented order cancellation",

        "Implemented multiple order states including pending, confirmed, delivering, completed, failed and cancelled",

        "Implemented admin product management",

        "Implemented customer management",

        "Implemented employee management",

        "Implemented voucher and promotion management",

        "Implemented administrative reports and statistics",

        "Implemented sales staff order management",

        "Implemented delivery staff order status management",

        "Final project grade: 9.5/10"
    ],


    /* =====================================================
       KEY FEATURES
    ===================================================== */

    features: [

        "User registration",

        "User login",

        "Password reset",

        "Personal profile management",

        "Book catalog",

        "Product detail view",

        "Book search",

        "Book filtering",

        "Book sorting",

        "Product ratings",

        "Product reviews",

        "Shopping cart",

        "Add to cart",

        "Update cart quantity",

        "Remove from cart",

        "Direct purchase",

        "Checkout",

        "Shipping address selection",

        "Voucher application",

        "Order creation",

        "Order tracking",

        "Order cancellation",

        "Sales staff order confirmation",

        "Delivery staff order processing",

        "Admin product management",

        "Admin customer management",

        "Admin employee management",

        "Promotion and voucher management",

        "Business reports and statistics"
    ],


    /* =====================================================
       USER ROLES
    ===================================================== */

    userRoles: [

        "Customer",

        "Sales Staff",

        "Delivery Staff",

        "Administrator"
    ],


    /* =====================================================
       SKILLS DEVELOPED
    ===================================================== */

    skills: [

        "Android Application Development",

        "Java Programming",

        "Mobile UI/UX Design",

        "Database Design",

        "SQLite Database Development",

        "System Analysis",

        "Software Design",

        "Requirement Analysis",

        "Use Case Modeling",

        "ERD Design",

        "Relational Database Modeling",

        "Activity Diagram Design",

        "CRUD Development",

        "Event Handling",

        "Application Testing",

        "Version Control",

        "Git Collaboration",

        "Teamwork",

        "Problem Solving",

        "Technical Documentation"
    ],


    /* =====================================================
       KNOWLEDGE APPLIED
    ===================================================== */

    knowledge: [

        "Android Application Architecture",

        "Object-Oriented Programming",

        "Java",

        "Mobile Application Development",

        "UI/UX Principles",

        "Database Management",

        "Relational Databases",

        "SQLite",

        "CRUD Operations",

        "Entity Relationship Diagram",

        "Relational Data Model",

        "Use Case Diagram",

        "Activity Diagram",

        "User Authentication",

        "Session Management",

        "Shopping Cart Logic",

        "Order Management",

        "Role-Based Application Design",

        "E-Commerce Business Processes",

        "Software Development Lifecycle"
    ],


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    technologies: [

        "Android",

        "Java",

        "SQLite",

        "XML",

        "RecyclerView",

        "Git",

        "GitHub"
    ],


    /* =====================================================
       TOOLS USED
    ===================================================== */

    tools: [

        "Android Studio",

        "Figma",

        "Git",

        "GitHub",

        "SQLite",

        "Android Emulator",

        "Genymotion"
    ],


    /* =====================================================
       DATABASE ENTITIES
    ===================================================== */

    databaseEntities: [

        "TaiKhoan",

        "TaiKhoanNV",

        "TaiKhoanKH",

        "PhieuGiamGia",

        "Sach",

        "DanhMucSach",

        "Sach_DanhMuc",

        "DonHang",

        "GioHang",

        "CTDH",

        "DanhGia",

        "ThongTinVanChuyen",

        "ThongTinThanhToan"
    ],


    /* =====================================================
       SYSTEM DESIGN
    ===================================================== */

    architecture: [

        "Android Mobile Application",

        "Java Application Logic",

        "XML User Interface",

        "SQLite Local Database",

        "Role-based User Interface",

        "Customer Module",

        "Sales Staff Module",

        "Delivery Staff Module",

        "Administrator Module"
    ],


    /* =====================================================
       LIMITATIONS
    ===================================================== */

    limitations: [

        "Real online payment integration was not included",

        "The application was developed only for Android",

        "The system was not deployed as a Web or iOS application",

        "UI testing was mainly performed manually",

        "The team initially faced difficulties choosing the application architecture and organizing the code",

        "The project did not use a dedicated professional project management tool"
    ],


    /* =====================================================
       FUTURE DEVELOPMENT
    ===================================================== */

    futureDevelopment: [

        "Integrate real online payment methods",

        "Add product return and refund functionality",

        "Integrate chatbot support",

        "Improve automated UI testing",

        "Improve application architecture and code organization",

        "Expand the application with more advanced e-commerce features"
    ],


    /* =====================================================
       SOURCE CODE
    ===================================================== */

    sourceCode:
        "https://github.com/vduc97585-svg/MobileAppDevProject",


    /* =====================================================
       PROJECT DOCUMENT
    ===================================================== */

    reportPdf:
        "pdf/6_mobile-report.pdf",

    presentationPdf:
        "",


    /* =====================================================
       PROJECT COVER
    ===================================================== */

    image:
        "",


    /* =====================================================
       FEATURED PROJECT
    ===================================================== */

    featured:
        true
},

{
    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    id: 8,

    title:
        "AI-Powered Emergency Traffic Light Priority System",

    subtitle:
        "Hệ thống ưu tiên đèn giao thông cho xe khẩn cấp sử dụng ESP32-CAM, YOLOv8 và YAMNet",

    subject:
        "CONG NGHE INTERNET OF THINGS HIEN DAI",

    classCode:
        "NT532.Q21",

    semester:
        "2026",

    academicYear:
        "2026",

    startDate:
        "April 2026",

    endDate:
        "May 2026",

    type:
        "IoT, AI & Cloud Computing Project",

    teamType:
        "Team Project",

    teamSize:
        3,

    status:
        "Completed",


    /* =====================================================
       GRADE
    ===================================================== */

    grade:
        "9.5/10",

    achievement:
        "Successfully developed a multimodal AI-based emergency traffic light priority system integrating IoT edge devices, cloud computing, computer vision, audio classification and real-time traffic control, achieving a final project grade of 9.5/10.",


    /* =====================================================
       PROJECT DESCRIPTION
    ===================================================== */

    description:
        "This project develops an intelligent emergency traffic light priority system capable of detecting and verifying ambulances in real time. The system combines image recognition using YOLOv8 with emergency siren verification using YAMNet. ESP32-CAM and an INMP441 microphone collect traffic image and audio data, while a FastAPI AI Server deployed on AWS EC2 performs multimodal validation. After successful verification, the Cloud publishes an MQTT force_green command to an ESP8266 controller to activate priority traffic lights.",


    /* =====================================================
       PROJECT OBJECTIVE
    ===================================================== */

    objective:
        "To design and implement an intelligent IoT traffic control system that can detect ambulances from images, verify emergency sirens from audio, combine both results through multimodal AI validation and automatically provide traffic light priority for confirmed emergency vehicles.",


    /* =====================================================
       MY ROLE
    ===================================================== */

    role:
        "Cloud Backend & Monitoring Developer responsible for deploying the system on AWS EC2, configuring the FastAPI Server and Mosquitto MQTT Broker, developing APIs for ESP32-CAM data processing, integrating Amazon S3 and DynamoDB, and designing the system monitoring dashboard.",


    /* =====================================================
       MY CONTRIBUTIONS
       Based directly on the project assignment table.
    ===================================================== */

    contributions: [

        "Deployed the IoT system backend on Amazon AWS EC2",

        "Configured the Ubuntu-based EC2 cloud environment",

        "Configured and deployed the FastAPI AI Server",

        "Configured Mosquitto MQTT Broker",

        "Configured MQTT communication between Cloud and IoT devices",

        "Developed APIs for receiving data from ESP32-CAM",

        "Developed image upload API endpoints",

        "Supported audio upload API processing",

        "Handled HTTP requests from ESP32-CAM",

        "Implemented backend data processing flow for edge device requests",

        "Integrated Amazon S3 with the backend system",

        "Configured S3 storage for captured images",

        "Configured S3 storage for processed YOLO images",

        "Supported storage of audio files for verification",

        "Generated data URLs for monitoring and review",

        "Integrated Amazon DynamoDB with the backend system",

        "Stored detection timestamps and event metadata in DynamoDB",

        "Stored YOLO detection status",

        "Stored traffic light state and system event logs",

        "Designed the real-time monitoring dashboard",

        "Developed dashboard integration with FastAPI APIs",

        "Displayed server and system status",

        "Displayed ambulance detection history",

        "Displayed saved image and audio records",

        "Supported manual override functionality for system testing",

        "Integrated Cloud backend with MQTT-based traffic light control"
    ],


    /* =====================================================
       PROJECT RESULTS
    ===================================================== */

    results: [

        "Successfully developed a working prototype for emergency vehicle traffic light priority",

        "Successfully implemented Hybrid Edge-Cloud architecture",

        "Successfully captured traffic images using ESP32-CAM",

        "Successfully captured environmental audio using INMP441 microphone",

        "Successfully deployed FastAPI AI Server on AWS EC2",

        "Successfully implemented real-time communication between Edge devices and Cloud",

        "Successfully integrated YOLOv8 ambulance detection",

        "Successfully integrated YAMNet emergency siren detection",

        "Successfully implemented multimodal image and audio validation",

        "Successfully implemented two-step emergency verification to reduce false activation",

        "Successfully implemented MQTT-based traffic light control",

        "Successfully controlled simulated traffic lights using ESP8266",

        "Successfully stored images and audio on Amazon S3",

        "Successfully stored event metadata and detection history in Amazon DynamoDB",

        "Successfully developed a real-time monitoring dashboard",

        "Successfully tested scenarios with no ambulance",

        "Successfully tested false-candidate scenarios where image detection succeeded but siren verification failed",

        "Successfully tested confirmed emergency scenarios",

        "Traffic lights successfully switched to priority mode after final emergency verification",

        "System automatically returned to normal traffic light operation after priority mode",

        "YOLOv8 model achieved mAP@0.5 of approximately 0.962",

        "YOLOv8 achieved a maximum F1-Score of approximately 0.96 at confidence threshold 0.557",

        "Precision reached approximately 1.00 at high confidence levels",

        "Recall reached approximately 0.97 at low confidence thresholds",

        "Final project grade: 9.5/10"
    ],


    /* =====================================================
       KEY FEATURES
    ===================================================== */

    features: [

        "Real-time ambulance detection",

        "Emergency siren recognition",

        "Multimodal AI validation",

        "Two-step emergency verification",

        "Periodic ESP32-CAM image capture",

        "Audio verification using INMP441",

        "HTTP REST API communication",

        "Multipart image and audio upload",

        "MQTT-based traffic light control",

        "Automatic emergency priority mode",

        "Automatic return to normal traffic cycle",

        "Traffic light finite-state machine",

        "Cloud-based AI inference",

        "Event-driven backend processing",

        "Amazon S3 media storage",

        "Amazon DynamoDB event logging",

        "Real-time monitoring dashboard",

        "Manual system override",

        "Detection history",

        "Image and audio playback"
    ],


    /* =====================================================
       AI & MACHINE LEARNING
    ===================================================== */

    aiModels: [

        "YOLOv8 - Ambulance Detection",

        "YAMNet - Emergency Siren Classification",

        "Multimodal Image-Audio Validation",

        "Transfer Learning",

        "Fine-tuning",

        "Data Augmentation"
    ],


    /* =====================================================
       DATASET & MODEL PERFORMANCE
    ===================================================== */

    modelPerformance: [

        "Final dataset size: 1,900 images",

        "Ambulance images: 1,107",

        "Not-ambulance images: 791",

        "Training set: 1,688 images",

        "Validation set: 212 images",

        "Training ratio: 88.84%",

        "Validation ratio: 11.16%",

        "YOLOv8 mAP@0.5: 0.962",

        "Ambulance mAP@0.5: 0.944",

        "Not Ambulance mAP@0.5: 0.979",

        "Maximum F1-Score: 0.96",

        "Optimal confidence threshold: 0.557"
    ],


    /* =====================================================
       SKILLS DEVELOPED
    ===================================================== */

    skills: [

        "IoT System Development",

        "Cloud Computing",

        "Cloud Backend Development",

        "REST API Development",

        "FastAPI Development",

        "AWS Deployment",

        "MQTT Communication",

        "Cloud Storage Integration",

        "NoSQL Database Integration",

        "Dashboard Development",

        "System Integration",

        "Distributed System Design",

        "Edge-Cloud Architecture",

        "Real-time Data Processing",

        "Computer Vision Integration",

        "AI System Integration",

        "Network Programming",

        "IoT Testing",

        "Debugging",

        "Problem Solving",

        "Teamwork",

        "Technical Documentation"
    ],


    /* =====================================================
       KNOWLEDGE APPLIED
    ===================================================== */

    knowledge: [

        "Internet of Things",

        "Hybrid Edge-Cloud Architecture",

        "Cloud Computing",

        "Edge Devices",

        "REST API",

        "Event-Driven Architecture",

        "MQTT Publish-Subscribe Model",

        "HTTP POST",

        "Multipart Form Data",

        "JSON",

        "Computer Vision",

        "Object Detection",

        "Audio Classification",

        "Multimodal AI",

        "Transfer Learning",

        "Data Augmentation",

        "Machine Learning Metrics",

        "Precision",

        "Recall",

        "F1-Score",

        "Mean Average Precision",

        "NoSQL Database",

        "Cloud Object Storage",

        "Finite-State Machine",

        "Real-time Monitoring"
    ],


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    technologies: [

        "Python",

        "FastAPI",

        "YOLOv8",

        "YAMNet",

        "TensorFlow",

        "Librosa",

        "MQTT",

        "Mosquitto",

        "HTTP REST API",

        "Amazon EC2",

        "Amazon S3",

        "Amazon DynamoDB",

        "Boto3",

        "ESP32-CAM",

        "ESP8266",

        "INMP441",

        "HTML",

        "CSS",

        "JavaScript",

        "C/C++"
    ],


    /* =====================================================
       TOOLS USED
    ===================================================== */

    tools: [

        "AWS EC2",

        "Amazon S3",

        "Amazon DynamoDB",

        "FastAPI",

        "Mosquitto MQTT Broker",

        "Paho MQTT",

        "Ultralytics YOLO",

        "YAMNet",

        "Librosa",

        "Boto3",

        "Ubuntu Server",

        "Arduino IDE"
    ],


    /* =====================================================
       HARDWARE
    ===================================================== */

    hardware: [

        "ESP32-CAM",

        "OV2640 Camera",

        "INMP441 MEMS Microphone",

        "ESP8266",

        "Red LED",

        "Yellow LED",

        "Green LED",

        "Power Supply",

        "WiFi Network"
    ],


    /* =====================================================
       SYSTEM ARCHITECTURE
    ===================================================== */

    architecture: [

        "ESP32-CAM - Edge Image Capture Device",

        "INMP441 - Emergency Audio Sensor",

        "HTTP REST API - Edge-to-Cloud Data Transmission",

        "AWS EC2 - Cloud AI Processing Server",

        "FastAPI - AI Backend and API Layer",

        "YOLOv8 - Ambulance Image Detection",

        "YAMNet - Emergency Siren Verification",

        "Amazon S3 - Image and Audio Storage",

        "Amazon DynamoDB - Event Metadata and Detection Logs",

        "MQTT Broker - Cloud-to-Device Communication",

        "ESP8266 - Traffic Light Controller",

        "Traffic LEDs - Simulated Traffic Intersection",

        "Web Dashboard - Real-time System Monitoring"
    ],


    /* =====================================================
       SYSTEM WORKFLOW
    ===================================================== */

    workflow: [

        "ESP32-CAM captures one traffic image every second",

        "Image is uploaded to FastAPI /upload endpoint",

        "YOLOv8 detects ambulance candidates",

        "If no ambulance is detected, the traffic cycle remains normal",

        "If an ambulance candidate is detected, the server returns audio_capture",

        "ESP32-CAM records approximately 5 seconds of audio using INMP441",

        "Audio is sampled at 16 kHz and stored as WAV",

        "Audio file is uploaded to FastAPI /audio endpoint",

        "YAMNet analyzes the audio for emergency siren signals",

        "Image and audio results are combined through multimodal validation",

        "If final_detect is true, FastAPI publishes MQTT force_green",

        "ESP8266 receives force_green and activates emergency traffic priority",

        "Images and audio are stored in Amazon S3",

        "Event metadata is stored in DynamoDB",

        "Dashboard displays detection and traffic light status",

        "After priority time expires, the system returns to normal operation"
    ],


    /* =====================================================
       TEST SCENARIOS
    ===================================================== */

    experiments: [

        "Scenario 1 - No ambulance detected",

        "Scenario 2 - Ambulance candidate detected but siren verification failed",

        "Scenario 3 - Ambulance and emergency siren successfully verified"
    ],


    /* =====================================================
       LIMITATIONS
    ===================================================== */

    limitations: [

        "ESP32-CAM has limited RAM and multitasking capability",

        "Running camera, WiFi, MQTT and I2S simultaneously may cause memory instability",

        "YAMNet siren recognition is affected by environmental noise",

        "Microphone distance affects emergency siren detection quality",

        "YOLOv8 accuracy may decrease in low light, bad weather or unfavorable camera angles",

        "The training dataset is still limited for large-scale real-world deployment",

        "The system depends on Internet connectivity for Cloud processing",

        "Network latency can affect real-time response",

        "The current system is a prototype for a simulated intersection",

        "Advanced MQTT authentication and end-to-end encryption have not been fully implemented"
    ],


    /* =====================================================
       FUTURE DEVELOPMENT
    ===================================================== */

    futureDevelopment: [

        "Use stronger Edge AI hardware such as Jetson Nano",

        "Use Raspberry Pi with TPU acceleration",

        "Perform partial AI inference directly at the edge",

        "Expand the ambulance training dataset",

        "Improve detection under night and bad weather conditions",

        "Support additional emergency vehicles such as fire trucks and police cars",

        "Apply advanced noise filtering for emergency siren detection",

        "Use higher-quality or directional microphones",

        "Replace public MQTT broker with AWS IoT Core",

        "Add MQTT authentication and encryption",

        "Expand to multi-lane intersections",

        "Deploy and evaluate the system in a real traffic environment"
    ],


    /* =====================================================
       PROJECT DOCUMENT
    ===================================================== */

    reportPdf:
        "pdf/7_iot-report.pdf",

    presentationPdf:
        "",


    /* =====================================================
       SOURCE CODE
    ===================================================== */

    sourceCode:
        "",


    /* =====================================================
       PROJECT COVER
    ===================================================== */

    image:
        "",


    /* =====================================================
       FEATURED PROJECT
    ===================================================== */

    featured:
        true
},

{
    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    id: 9,

    title:
        "Reinforcement Learning for SDN Cyberattack Mitigation",

    subtitle:
        "Ứng dụng học máy tăng cường trong ra quyết định điều khiển và giảm thiểu tấn công mạng cho mạng SDN",

    subject:
        "HOC MAY TANG CUONG CHO CAC HE THONG MANG",

    classCode:
        "NT549.Q21",

    semester:
        "2026",

    academicYear:
        "2026",

    startDate:
        "",

    endDate:
        "2026",

    type:
        "Reinforcement Learning & SDN Security Project",

    teamType:
        "Team Project",

    teamSize:
        3,

    status:
        "Completed",


    /* =====================================================
       GRADE
    ===================================================== */

    grade:
        "9.0/10",

    achievement:
        "Successfully designed and evaluated an automated SDN defense system using Reinforcement Learning, where PPO demonstrated strong convergence, near-zero policy switching and significantly higher stability than DQN, achieving a final project grade of 9.0/10.",


    /* =====================================================
       PROJECT DESCRIPTION
    ===================================================== */

    description:
        "This project focuses on applying Reinforcement Learning to automate security decision-making and cyberattack mitigation in Software-Defined Networking. The proposed system integrates an RL Agent directly with the ONOS SDN Controller in a closed-loop architecture. The agent observes real-time network state metrics, selects defensive actions such as blocking, rate limiting, traffic redirection or device isolation, receives feedback from the network and continuously improves its defense policy through reward-based learning.",


    /* =====================================================
       PROJECT OBJECTIVE
    ===================================================== */

    objective:
        "To design and evaluate an adaptive SDN security system capable of monitoring network conditions, automatically selecting suitable mitigation actions against cyberattacks, preserving Quality of Service and improving policy stability through Deep Reinforcement Learning algorithms including DQN and PPO.",


    /* =====================================================
       MY ROLE
    ===================================================== */

    role:
        "Team member in a three-person Reinforcement Learning and SDN security research project involving SDN environment design, network telemetry, reinforcement learning model development, security mitigation logic, experimental evaluation and technical documentation.",


    /* =====================================================
       CONTRIBUTIONS
       The report does not provide an individual task
       assignment table, so these are written at team level.
    ===================================================== */

    contributions: [

        "Participated in researching Reinforcement Learning applications for SDN security",

        "Participated in researching Software-Defined Networking architecture and security threats",

        "Participated in designing the automated SDN defense architecture",

        "Participated in modeling the security problem as a Markov Decision Process",

        "Participated in designing the 9-dimensional network state vector",

        "Participated in defining the defensive action space",

        "Participated in designing the multi-objective reward function",

        "Participated in building the Mininet SDN simulation environment",

        "Participated in integrating Mininet with ONOS Controller",

        "Participated in collecting network telemetry through ONOS APIs",

        "Participated in configuring network attack scenarios",

        "Participated in implementing DDoS attack scenarios",

        "Participated in implementing Packet-In Flood scenarios",

        "Participated in implementing Flow Table Overflow scenarios",

        "Participated in implementing IP Spoofing scenarios",

        "Participated in implementing Port Scanning scenarios",

        "Participated in implementing DQN-based defense policies",

        "Participated in implementing PPO-based defense policies",

        "Participated in implementing Multi-Seed Training",

        "Participated in designing Offline Validation",

        "Participated in designing Online Validation",

        "Participated in comparing DQN, PPO and Rule-based defense",

        "Participated in evaluating Reward, Stability and Switching Rate",

        "Participated in deploying components using Docker containerization",

        "Participated in configuring K3s-based service orchestration",

        "Participated in integrating Prometheus and Grafana for system monitoring",

        "Participated in using MLflow for experiment tracking",

        "Participated in analyzing experimental results",

        "Participated in documenting the proposed architecture and evaluation"
    ],


    /* =====================================================
       PROJECT RESULTS
    ===================================================== */

    results: [

        "Successfully designed an automated SDN cyberattack mitigation system",

        "Successfully implemented a closed-loop interaction between the RL Agent and SDN environment",

        "Successfully integrated the RL system with ONOS Controller",

        "Successfully built the SDN network environment using Mininet",

        "Successfully modeled network security as a Reinforcement Learning problem",

        "Successfully implemented a 9-dimensional state representation",

        "Successfully implemented five defensive actions",

        "Successfully implemented DQN and PPO agents",

        "Successfully performed Multi-Seed Training with 3 seeds for DQN and 5 seeds for PPO",

        "Successfully implemented Offline and Online Validation workflows",

        "Successfully evaluated Normal, DDoS, Spoofing, Flow Table Overflow, Packet-In Flood and Port Scan scenarios",

        "PPO reward began improving after approximately episode 200",

        "PPO achieved positive reward at approximately episode 500",

        "PPO converged to approximately +395 reward after episode 800",

        "PPO reward standard deviation approached zero after convergence",

        "PPO reached approximately +395 final reward across all tested random seeds",

        "DQN remained around approximately -1450 reward during most of training",

        "DQN did not demonstrate clear policy convergence",

        "Statistical T-test produced p-value approximately 3.3 × 10^-11",

        "The performance difference between PPO and DQN was statistically significant",

        "DQN switching rate remained around approximately 0.08",

        "PPO switching rate was approximately 0",

        "Rule-based switching rate was approximately 0",

        "PPO achieved approximately +395 reward in the Normal traffic scenario",

        "PPO demonstrated significantly higher stability than DQN",

        "PPO produced performance comparable to Rule-based defense in attack scenarios",

        "The project demonstrated the potential of Reinforcement Learning for automated SDN security",

        "Final project grade: 9.0/10"
    ],


    /* =====================================================
       KEY FEATURES
    ===================================================== */

    features: [

        "Automated SDN attack mitigation",

        "Closed-loop RL interaction",

        "Real-time network state monitoring",

        "9-dimensional state vector",

        "Adaptive defense policy",

        "DQN-based decision making",

        "PPO-based decision making",

        "Multi-Seed Training",

        "Offline Validation",

        "Online Validation",

        "QoS-aware reward function",

        "Security-aware reward function",

        "Policy stability penalty",

        "Flow blocking",

        "Bandwidth rate limiting",

        "Traffic redirection",

        "Device isolation",

        "Honeypot traffic redirection",

        "ONOS REST API integration",

        "OpenFlow rule deployment",

        "Real-time telemetry collection",

        "Experiment tracking",

        "Network monitoring",

        "Containerized deployment"
    ],


    /* =====================================================
       STATE SPACE
    ===================================================== */

    stateSpace: [

        "Packet Rate",

        "Byte Rate",

        "Flow Count",

        "Source IP Entropy",

        "Latency",

        "Packet Loss",

        "Queue Length",

        "Controller CPU",

        "Previous Action"
    ],


    /* =====================================================
       ACTION SPACE
    ===================================================== */

    actionSpace: [

        "No Action",

        "Block Suspicious Flow",

        "Limit Bandwidth",

        "Redirect Traffic",

        "Isolate Device"
    ],


    /* =====================================================
       ATTACK SCENARIOS
    ===================================================== */

    attackScenarios: [

        "DDoS Flood",

        "Packet-In Flood",

        "Flow Table Overflow",

        "IP Spoofing",

        "Port Scanning",

        "Mixed Traffic Scenario"
    ],


    /* =====================================================
       SKILLS DEVELOPED
    ===================================================== */

    skills: [

        "Reinforcement Learning",

        "Deep Reinforcement Learning",

        "SDN Security",

        "Network Security",

        "Cyberattack Mitigation",

        "Software-Defined Networking",

        "Network Simulation",

        "Network Telemetry",

        "Machine Learning Experimentation",

        "Statistical Evaluation",

        "Reward Function Design",

        "RL Environment Design",

        "Network Automation",

        "API Integration",

        "Containerization",

        "System Monitoring",

        "Data Analysis",

        "Performance Evaluation",

        "Troubleshooting",

        "Problem Solving",

        "Teamwork",

        "Technical Documentation"
    ],


    /* =====================================================
       KNOWLEDGE APPLIED
    ===================================================== */

    knowledge: [

        "Reinforcement Learning",

        "Deep Reinforcement Learning",

        "Markov Decision Process",

        "Deep Q-Network",

        "Proximal Policy Optimization",

        "Actor-Critic Architecture",

        "Experience Replay",

        "Target Network",

        "Exploration vs Exploitation",

        "Policy Gradient",

        "Clipped Objective",

        "Multi-Seed Training",

        "Software-Defined Networking",

        "Control Plane",

        "Data Plane",

        "OpenFlow",

        "ONOS Controller",

        "Northbound API",

        "Southbound API",

        "REST API",

        "DDoS Attack",

        "Packet-In Flood",

        "Flow Table Overflow",

        "IP Spoofing",

        "Port Scanning",

        "Honeypot",

        "Quality of Service",

        "Network Latency",

        "Packet Loss",

        "Queue Length",

        "Controller CPU Utilization",

        "Policy Flapping",

        "Statistical Significance"
    ],


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    technologies: [

        "Python",

        "Reinforcement Learning",

        "DQN",

        "PPO",

        "ONOS",

        "Mininet",

        "OpenFlow",

        "Docker",

        "K3s",

        "Prometheus",

        "Grafana",

        "MLflow",

        "REST API"
    ],


    /* =====================================================
       TOOLS USED
    ===================================================== */

    tools: [

        "Mininet",

        "ONOS Controller",

        "Docker",

        "K3s",

        "Prometheus",

        "Grafana",

        "MLflow",

        "Python",

        "OpenFlow",

        "RESTful API"
    ],


    /* =====================================================
       SYSTEM ARCHITECTURE
    ===================================================== */

    architecture: [

        "Mininet - SDN Network Environment",

        "ONOS - Central SDN Controller",

        "OpenFlow Switches - Network Data Plane",

        "Monitoring & Data Collection Module",

        "9-Dimensional State Construction",

        "RL Agent - DQN or PPO",

        "Action Selection Module",

        "Mitigation Execution through ONOS",

        "Environment Feedback Loop",

        "Reward Calculation",

        "Policy Update",

        "Prometheus - Metrics Collection",

        "Grafana - Monitoring Dashboard",

        "MLflow - Model and Experiment Tracking",

        "Docker - Containerization",

        "K3s - Container Orchestration"
    ],


    /* =====================================================
       NETWORK TOPOLOGY
    ===================================================== */

    topology: [

        "Switch s1 - Central switch receiving attacker and legitimate traffic",

        "Switch s2 - Connection to protected victim server",

        "Switch s3 - Connection to Honeypot",

        "Hosts h1-h6 - Attack hosts",

        "Host h7 - Normal user",

        "Host h8 - Victim server",

        "Host h9 - Honeypot",

        "Normal path: h7 → s1 → s2 → h8",

        "Attack mitigation redirect path: s1 → s3 → h9"
    ],


    /* =====================================================
       REWARD FUNCTION
    ===================================================== */

    rewardFunction: [

        "Security Reward",

        "QoS Penalty",

        "Stability Penalty",

        "Reward = Security Reward - QoS Penalty - Stability Penalty"
    ],


    /* =====================================================
       EXPERIMENTS
    ===================================================== */

    experiments: [

        "DQN Multi-Seed Training - 3 seeds",

        "PPO Multi-Seed Training - 5 seeds",

        "Offline Validation",

        "Online Validation",

        "Normal Traffic",

        "Sudden Attack",

        "Traffic Spike",

        "Mixed Scenario",

        "DDoS",

        "Spoofing",

        "Flow Table Overflow",

        "Packet-In Flood",

        "Port Scan"
    ],


    /* =====================================================
       PERFORMANCE
    ===================================================== */

    modelPerformance: [

        "PPO convergence reward: approximately +395",

        "PPO positive reward reached around episode 500",

        "PPO stable convergence after approximately episode 800",

        "PPO reward standard deviation approaches 0",

        "DQN reward remains approximately -1450",

        "PPO final reward approximately +395 across all seeds",

        "T-test p-value: 3.3 × 10^-11",

        "DQN switching rate: approximately 0.08",

        "PPO switching rate: approximately 0",

        "PPO Normal scenario reward: approximately +395"
    ],


    /* =====================================================
       LIMITATIONS
    ===================================================== */

    limitations: [

        "The system was primarily evaluated in a simulated SDN environment",

        "The number of attack scenarios and training samples remains limited",

        "Generalization to unseen zero-day attacks has not been fully validated",

        "Reinforcement Learning training requires significant computation time and resources",

        "Several hyperparameters still require manual tuning",

        "The study primarily compares basic DQN and PPO",

        "Advanced algorithms such as A3C, DDPG and Dueling DQN were not fully evaluated",

        "RL decision explainability remains limited",

        "The system does not yet include complete safety testing and fault recovery mechanisms",

        "Deployment on large-scale real SDN infrastructure has not yet been completed"
    ],


    /* =====================================================
       FUTURE DEVELOPMENT
    ===================================================== */

    futureDevelopment: [

        "Integrate Digital Twin technology for safe policy testing",

        "Build a realistic digital replica of production SDN environments",

        "Integrate Large Language Models for network administration support",

        "Use LLMs to explain RL defense decisions in natural language",

        "Evaluate additional RL algorithms such as A3C and DDPG",

        "Evaluate Double DQN and Dueling DQN",

        "Improve model explainability",

        "Expand attack scenarios and datasets",

        "Improve zero-day attack generalization",

        "Deploy on larger real-world SDN infrastructure",

        "Add fault recovery and safety validation mechanisms"
    ],


    /* =====================================================
       PROJECT DOCUMENT
    ===================================================== */

    reportPdf:
        "pdf/8_rl-report.pdf",

    presentationPdf:
        "",


    /* =====================================================
       PROJECT COVER
    ===================================================== */

    image:
        "",


    /* =====================================================
       FEATURED PROJECT
    ===================================================== */

    featured:
        true
},

{
    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    id: 10,

    title:
        "MLOps Pipeline for Autonomous SDN Security",

    subtitle:
        "Xây dựng pipeline vận hành MLOps cho hệ thống bảo mật mạng SDN tự động dựa trên học máy tăng cường",

    subject:
        "CONG NGHE DEVOPS VA UNG DUNG",

    classCode:
        "NT548.Q21",

    semester:
        "2026",

    academicYear:
        "2026",

    startDate:
        "April 2026",

    endDate:
        "May 2026",

    type:
        "DevOps, MLOps & Network Security Project",

    teamType:
        "Team Project",

    teamSize:
        3,

    status:
        "Completed",


    /* =====================================================
       GRADE
    ===================================================== */

    grade:
        "10.0/10",

    achievement:
        "Successfully designed and deployed an end-to-end DevOps–MLOps pipeline for an autonomous Reinforcement Learning-based SDN security system, integrating container orchestration, CI/CD, model lifecycle management, monitoring, alerting and automated retraining, achieving a final project grade of 10.0/10.",


    /* =====================================================
       PROJECT DESCRIPTION
    ===================================================== */

    description:
        "This project focuses on building a complete DevOps–MLOps architecture for an autonomous Software-Defined Networking security system powered by Reinforcement Learning. The system integrates ONOS and Mininet with DQN and PPO agents, while Docker and Kubernetes/K3s provide containerized deployment and orchestration. GitHub Actions supports continuous integration, MLflow and MinIO manage the machine learning lifecycle and artifacts, while Prometheus, Grafana and AlertManager provide runtime monitoring and automated operational responses.",


    /* =====================================================
       PROJECT OBJECTIVE
    ===================================================== */

    objective:
        "To design and deploy an end-to-end MLOps pipeline that supports containerized SDN security services, automated CI/CD, Reinforcement Learning model training and serving, model versioning, monitoring, alerting, retraining, promotion, rollback and continuous operation without disrupting the SDN environment.",


    /* =====================================================
       MY ROLE
    ===================================================== */

    role:
        "Team member in a three-person DevOps and MLOps project involving cloud-native system architecture, containerization, Kubernetes/K3s orchestration, CI/CD automation, Reinforcement Learning model lifecycle management, monitoring, alerting and automated model operations.",


    /* =====================================================
       MY CONTRIBUTIONS
       The report does not provide an individual assignment
       table, so contributions are written at team level.
    ===================================================== */

    contributions: [

        "Participated in designing the overall DevOps–MLOps system architecture",

        "Participated in integrating the SDN security system with the MLOps pipeline",

        "Participated in containerizing system components using Docker",

        "Participated in deploying services on Kubernetes/K3s",

        "Participated in defining Kubernetes namespace and service architecture",

        "Participated in configuring Kubernetes Deployments",

        "Participated in configuring Kubernetes StatefulSet for MinIO",

        "Participated in configuring Kubernetes Services and NodePorts",

        "Participated in using ConfigMap for monitoring and service configuration",

        "Participated in using Kubernetes Secrets for sensitive credentials",

        "Participated in configuring CronJob and Job for model training and initialization",

        "Participated in configuring HPA for RL Serving scalability",

        "Participated in designing the GitHub Actions CI pipeline",

        "Participated in configuring Python code validation using flake8",

        "Participated in validating Kubernetes YAML configuration",

        "Participated in validating Grafana dashboard JSON configuration",

        "Participated in implementing unit tests and smoke tests",

        "Participated in automating Docker image build processes",

        "Participated in designing local CD deployment using deploy.sh",

        "Participated in deploying system components through kubectl",

        "Participated in monitoring Kubernetes rollout status",

        "Participated in integrating MLflow Experiment Tracking",

        "Participated in managing DQN and PPO experiments",

        "Participated in logging model parameters, metrics and artifacts",

        "Participated in configuring MLflow Model Registry",

        "Participated in configuring MinIO as MLflow artifact storage",

        "Participated in implementing model Production and Staging stages",

        "Participated in implementing model fallback mechanisms",

        "Participated in implementing RL Serving APIs",

        "Participated in implementing /health, /predict and /reload endpoints",

        "Participated in integrating RL Serving with the SDN Control Loop",

        "Participated in integrating ONOS state collection with RL inference",

        "Participated in implementing Production and Staging model comparison",

        "Participated in designing model promotion and rollback mechanisms",

        "Participated in configuring Prometheus runtime metrics",

        "Participated in designing Grafana monitoring dashboards",

        "Participated in configuring AlertManager rules",

        "Participated in implementing the Auto-Trigger webhook service",

        "Participated in implementing automatic model retraining",

        "Participated in implementing automatic model promotion",

        "Participated in debugging deployment, monitoring and automation issues",

        "Participated in documenting the complete MLOps pipeline"
    ],


    /* =====================================================
       PROJECT RESULTS
    ===================================================== */

    results: [

        "Successfully built an end-to-end MLOps pipeline for an RL-based SDN security system",

        "Successfully containerized system services using Docker",

        "Successfully deployed the system on Kubernetes/K3s",

        "Successfully created a dedicated sdn-security Kubernetes namespace",

        "Successfully deployed ONOS Controller in the Kubernetes environment",

        "Successfully deployed DQN and PPO RL Serving services",

        "Successfully deployed the Control Loop service",

        "Successfully deployed MLflow Tracking Server",

        "Successfully deployed MinIO as artifact storage",

        "Successfully deployed Prometheus",

        "Successfully deployed Grafana",

        "Successfully deployed AlertManager",

        "Successfully deployed the Auto-Trigger automation service",

        "Successfully configured Kubernetes Deployments, Services, ConfigMaps and Secrets",

        "Successfully configured CronJobs and Jobs for DQN/PPO model training",

        "Successfully configured Horizontal Pod Autoscaling for RL Serving",

        "Successfully implemented GitHub Actions-based continuous integration",

        "Successfully validated Python source code using flake8",

        "Successfully validated Kubernetes manifests in CI",

        "Successfully validated Grafana dashboard configuration",

        "Successfully generated CI artifacts through GitHub Actions",

        "Successfully implemented Local CD using deploy.sh",

        "Successfully deployed all Kubernetes services through Local CD",

        "Successfully tracked DQN and PPO experiments using MLflow",

        "Successfully logged model parameters, metrics and artifacts",

        "Successfully registered DQN and PPO models in MLflow Model Registry",

        "Successfully stored model artifacts in MinIO",

        "Successfully implemented Production and Staging model stages",

        "Successfully implemented Champion-Challenger model comparison",

        "Successfully implemented fallback to local models when MLflow or MinIO is unavailable",

        "Successfully implemented DQN Serving on port 8000",

        "Successfully implemented PPO Serving on port 8001",

        "Successfully implemented /health endpoint",

        "Successfully implemented /predict endpoint",

        "Successfully implemented /reload endpoint",

        "Successfully integrated the RL Control Loop with ONOS Controller",

        "Successfully exported runtime metrics to Prometheus",

        "Successfully created Grafana dashboards for system and model monitoring",

        "Successfully configured AlertManager-based alerting",

        "Successfully triggered retraining through the Auto-Trigger service",

        "Successfully supported automated model promotion",

        "Successfully supported model rollback and fallback strategies",

        "Successfully demonstrated continuous monitoring and improvement of deployed RL models",

        "Resolved deployment issues including kubeconfig errors, Prometheus YAML errors, metric mismatch, Auto-Trigger 401 Unauthorized and Grafana No Data",

        "Final project grade: 10.0/10"
    ],


    /* =====================================================
       KEY FEATURES
    ===================================================== */

    features: [

        "End-to-end MLOps pipeline",

        "DevOps automation",

        "Containerized architecture",

        "Kubernetes orchestration",

        "K3s deployment",

        "CI/CD pipeline",

        "GitHub Actions CI",

        "Local Continuous Deployment",

        "Automated source code validation",

        "Smoke testing",

        "Docker image build automation",

        "RL model training",

        "DQN model serving",

        "PPO model serving",

        "MLflow Experiment Tracking",

        "MLflow Model Registry",

        "MinIO artifact storage",

        "Model versioning",

        "Production and Staging models",

        "Champion-Challenger evaluation",

        "Model promotion",

        "Model rollback",

        "Local model fallback",

        "Runtime model reload",

        "Prometheus monitoring",

        "Grafana visualization",

        "AlertManager alerting",

        "Automated retraining",

        "Automated promotion",

        "Auto-Trigger webhook",

        "Kubernetes CronJobs",

        "Horizontal Pod Autoscaling",

        "Automatic pod restart",

        "Secret management",

        "Configuration management",

        "Real-time SDN monitoring"
    ],


    /* =====================================================
       MLOPS PIPELINE
    ===================================================== */

    mlopsPipeline: [

        "Collect SDN network state",

        "Build 8-dimensional state vector",

        "Train DQN/PPO",

        "Log parameters and metrics to MLflow",

        "Store model artifacts in MinIO",

        "Register model version in MLflow Model Registry",

        "Evaluate Staging model",

        "Promote best model to Production",

        "Load model through RL Serving",

        "Run Production inference",

        "Monitor runtime metrics",

        "Detect performance degradation",

        "Trigger automatic retraining",

        "Promote improved model",

        "Reload serving without downtime",

        "Rollback or fallback when required"
    ],


    /* =====================================================
       CI/CD PIPELINE
    ===================================================== */

    cicdPipeline: [

        "Source Code",

        "GitHub Actions",

        "Python Syntax Validation",

        "flake8 Code Quality Check",

        "Unit Test",

        "Smoke Test",

        "Kubernetes YAML Validation",

        "Grafana JSON Validation",

        "Docker Build",

        "Docker Image",

        "CI Artifact Generation",

        "Local CD",

        "kubectl apply",

        "Kubernetes Rollout Validation",

        "Service Deployment"
    ],


    /* =====================================================
       STATE VECTOR
    ===================================================== */

    stateSpace: [

        "Packet Rate",

        "Byte Rate",

        "Flow Count",

        "Flow Growth Rate",

        "Source IP Entropy",

        "Latency",

        "Packet Loss",

        "Controller CPU"
    ],


    /* =====================================================
       ACTION SPACE
    ===================================================== */

    actionSpace: [

        "No Action",

        "Block Suspicious Flow",

        "Limit Bandwidth",

        "Redirect Traffic",

        "Isolate Device"
    ],


    /* =====================================================
       SKILLS DEVELOPED
    ===================================================== */

    skills: [

        "DevOps",

        "MLOps",

        "CI/CD",

        "Cloud-Native Architecture",

        "Containerization",

        "Kubernetes Administration",

        "K3s Administration",

        "Docker",

        "Infrastructure Automation",

        "Machine Learning Operations",

        "Model Lifecycle Management",

        "Model Deployment",

        "Model Monitoring",

        "Model Versioning",

        "Model Serving",

        "Model Registry Management",

        "Artifact Management",

        "Observability",

        "Prometheus Monitoring",

        "Grafana Dashboard Development",

        "Alert Management",

        "Automation",

        "API Integration",

        "SDN System Integration",

        "Reinforcement Learning Operations",

        "Linux Administration",

        "Troubleshooting",

        "Problem Solving",

        "Teamwork",

        "Technical Documentation"
    ],


    /* =====================================================
       KNOWLEDGE APPLIED
    ===================================================== */

    knowledge: [

        "DevOps Lifecycle",

        "MLOps Lifecycle",

        "Continuous Integration",

        "Continuous Deployment",

        "Container Architecture",

        "Kubernetes Architecture",

        "Kubernetes Deployment",

        "Kubernetes StatefulSet",

        "Kubernetes Service",

        "Kubernetes ConfigMap",

        "Kubernetes Secret",

        "Kubernetes Job",

        "Kubernetes CronJob",

        "Horizontal Pod Autoscaler",

        "Namespace Isolation",

        "Service Discovery",

        "Model Experiment Tracking",

        "Model Registry",

        "Model Versioning",

        "Artifact Storage",

        "Champion-Challenger Pattern",

        "Production and Staging Environments",

        "Rollback Strategy",

        "Fallback Strategy",

        "Observability",

        "Alert Automation",

        "Webhook Automation",

        "Infrastructure as Code",

        "Reinforcement Learning",

        "Software-Defined Networking",

        "ONOS REST API",

        "Cloud-Native MLOps"
    ],


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    technologies: [

        "Python 3.10",

        "Docker",

        "Kubernetes",

        "K3s",

        "GitHub Actions",

        "MLflow",

        "MinIO",

        "Prometheus",

        "Grafana",

        "AlertManager",

        "Flask",

        "ONOS",

        "Mininet",

        "DQN",

        "PPO",

        "REST API",

        "YAML",

        "Git",

        "Docker Hub"
    ],


    /* =====================================================
       TOOLS USED
    ===================================================== */

    tools: [

        "Docker",

        "kubectl",

        "K3s",

        "GitHub Actions",

        "MLflow",

        "MinIO",

        "Prometheus",

        "Grafana",

        "AlertManager",

        "Flake8",

        "Git",

        "GitHub",

        "Docker Hub",

        "ONOS Controller",

        "Mininet",

        "Ubuntu",

        "Bash",

        "deploy.sh"
    ],


    /* =====================================================
       SYSTEM ARCHITECTURE
    ===================================================== */

    architecture: [

        "Mininet - SDN Traffic Generator",

        "ONOS Controller - Network Management",

        "State Collector - Network State Collection",

        "State Builder - 8-Dimensional State Vector",

        "Control Loop - Runtime Coordination",

        "DQN/PPO RL Serving - Decision Making",

        "Action Executor - Apply ONOS Flow Rules",

        "MLflow - Experiment Tracking and Model Registry",

        "MinIO - Model and Artifact Storage",

        "Prometheus - Runtime Metrics Collection",

        "Grafana - Monitoring Dashboard",

        "AlertManager - Alert Processing",

        "Auto Trigger - Retrain and Promote Automation",

        "GitHub Actions - Continuous Integration",

        "Docker - Containerization",

        "K3s - Container Orchestration"
    ],


    /* =====================================================
       MLOPS WORKFLOW
    ===================================================== */

    workflow: [

        "Mininet generates normal and attack traffic",

        "ONOS Controller manages the SDN environment",

        "State Collector reads flow information through ONOS REST API",

        "State Builder converts raw network information into an 8-dimensional vector",

        "Control Loop sends the state vector to RL Serving",

        "Production DQN or PPO selects one defensive action",

        "Staging model may simultaneously perform shadow inference",

        "Control Loop calculates Production and Staging rewards",

        "Production action is applied back to ONOS",

        "Runtime metrics are exported to Prometheus",

        "Grafana visualizes network and RL performance",

        "AlertManager evaluates alert conditions",

        "Auto-Trigger receives alerts through webhook",

        "Low reward triggers a Kubernetes retraining Job",

        "Training results are logged to MLflow",

        "Artifacts are stored in MinIO",

        "Improved Staging model is promoted to Production",

        "RL Serving reloads the new model through /reload",

        "Poor-performing models can be rolled back",

        "Local model fallback is used when MLflow or MinIO is unavailable"
    ],


    /* =====================================================
       RL SERVING ENDPOINTS
    ===================================================== */

    endpoints: [

        "/health - Check service and model status",

        "/predict - Receive state vector and return defensive action",

        "/reload - Reload model after promotion or rollback",

        "DQN Serving: Port 8000",

        "PPO Serving: Port 8001",

        "DQN Prometheus Metrics: Port 9002",

        "PPO Prometheus Metrics: Port 9003"
    ],


    /* =====================================================
       MONITORING METRICS
    ===================================================== */

    monitoringMetrics: [

        "rl_reward",

        "rl_latency",

        "rl_packet_loss",

        "rl_flow_count",

        "rl_action",

        "rl_controller_cpu",

        "serving_requests_total",

        "serving_latency_seconds",

        "alerts_received_total"
    ],


    /* =====================================================
       GRAFANA DASHBOARD
    ===================================================== */

    monitoringDashboard: [

        "Reward Performance",

        "Flow Count",

        "Packet Loss",

        "Latency",

        "RL Action History",

        "Serving Status",

        "Alert Status",

        "Security Status",

        "Threat Level",

        "Defense Action Status"
    ],


    /* =====================================================
       MODEL LIFECYCLE
    ===================================================== */

    modelLifecycle: [

        "Experiment Tracking",

        "Parameter Logging",

        "Metric Logging",

        "Artifact Logging",

        "Model Registry",

        "Staging",

        "Production",

        "Champion-Challenger Evaluation",

        "Automatic Promotion",

        "Automatic Retraining",

        "Runtime Reload",

        "Rollback",

        "Fallback"
    ],


    /* =====================================================
       LIMITATIONS
    ===================================================== */

    limitations: [

        "The current deployment is primarily a simulated and experimental environment",

        "The Kubernetes infrastructure has not been evaluated under very large-scale production workloads",

        "The RL Agent currently focuses on a limited number of common SDN attacks",

        "Automatic retraining remains partly threshold-based",

        "Model rollback logic is still relatively simple",

        "Production-grade Kubernetes fault tolerance has not been fully optimized",

        "The SDN system has not yet been deployed on large-scale real network infrastructure"
    ],


    /* =====================================================
       FUTURE DEVELOPMENT
    ===================================================== */

    futureDevelopment: [

        "Deploy the system on real SDN infrastructure",

        "Deploy the system on larger cloud environments",

        "Evaluate the pipeline under higher network traffic",

        "Integrate more advanced Reinforcement Learning algorithms",

        "Improve attack detection and mitigation coverage",

        "Implement model drift detection",

        "Develop stronger automated rollback mechanisms",

        "Implement self-healing MLOps workflows",

        "Improve Kubernetes fault tolerance",

        "Improve production-grade scalability",

        "Expand observability and automated operations"
    ],


    /* =====================================================
       SOURCE CODE
    ===================================================== */

    sourceCode:
        "https://github.com/hmm0411/autonomous_sdn_security/tree/nt548-mlops",


    /* =====================================================
       PROJECT DOCUMENT
    ===================================================== */

    reportPdf:
        "pdf/9_devops-report.pdf",

    presentationPdf:
        "",


    /* =====================================================
       PROJECT COVER
    ===================================================== */

    image:
        "",


    /* =====================================================
       FEATURED PROJECT
    ===================================================== */

    featured:
        true
},

{
    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    id: 11,

    title:
        "NT-UIT Hybrid Campus Network Design",

    subtitle:
        "Thiết kế hệ thống mạng cho Trường Đại học NT-UIT",

    subject:
        "THIET KE MANG",

    classCode:
        "NT113.Q21",

    semester:
        "2026",

    academicYear:
        "2026",

    startDate:
        "April 2026",

    endDate:
        "June 2026",

    type:
        "Enterprise Network Design & Hybrid Cloud Project",

    teamType:
        "Team Project",

    teamSize:
        3,

    status:
        "Completed",


    /* =====================================================
       GRADE
    ===================================================== */

    grade:
        "10.0/10",

    achievement:
        "Successfully designed and simulated a complete enterprise-grade university network integrating campus infrastructure, branch connectivity, secure remote access, server systems, network segmentation and Google Cloud-based Hybrid Cloud services, achieving a final project grade of 10.0/10.",


    /* =====================================================
       PROJECT DESCRIPTION
    ===================================================== */

    description:
        "This project focuses on designing and simulating a complete network infrastructure for NT-UIT University, including the main campus, District 3 branch, internal and public Wi-Fi, server infrastructure, DMZ, secure remote access and Hybrid Cloud integration with Google Cloud Platform. The architecture combines hierarchical campus network design, VLAN segmentation, dynamic routing, VPN, ACL, NAT/PAT, server services, cloud backup and monitoring to provide a scalable, secure and highly available network environment.",


    /* =====================================================
       PROJECT OBJECTIVE
    ===================================================== */

    objective:
        "To design a scalable and secure enterprise network for a university environment that supports multiple user groups, server systems, Internet connectivity, branch communication, remote access, network segmentation, Hybrid Cloud backup and monitoring while maintaining high availability, security and future scalability.",


    /* =====================================================
       MY ROLE
    ===================================================== */

    role:
        "Team member in a three-person enterprise network design project involving campus network architecture, VLAN and IP planning, routing, network security, VPN design, GNS3 simulation, Google Cloud integration, Hybrid Cloud backup, monitoring, system testing and deployment cost planning.",


    /* =====================================================
       MY CONTRIBUTIONS
       The report does not provide an individual task
       assignment table, so contributions remain team-level.
    ===================================================== */

    contributions: [

        "Participated in analyzing networking requirements for the university environment",

        "Participated in designing the overall campus network architecture",

        "Participated in designing the logical network topology",

        "Participated in designing the physical network topology",

        "Participated in applying hierarchical network design principles",

        "Participated in designing Core, Distribution and Access network layers",

        "Participated in dividing the network into multiple functional VLANs",

        "Participated in designing VLANs for management, staff, faculty, students, labs and guest users",

        "Participated in designing VLANs for Server Farm, DMZ, VPN and cloud services",

        "Participated in designing the IP addressing plan",

        "Participated in subnetting and gateway allocation",

        "Participated in configuring Inter-VLAN Routing",

        "Participated in configuring OSPF dynamic routing",

        "Participated in configuring BGP routing for Google Cloud connectivity",

        "Participated in configuring route redistribution",

        "Participated in configuring Static Routes where required",

        "Participated in configuring DHCP for user VLANs",

        "Participated in configuring NAT and PAT for Internet access",

        "Participated in configuring Static NAT and Port Forwarding for public services",

        "Participated in designing Site-to-Site VPN connectivity",

        "Participated in designing Remote Access VPN",

        "Participated in designing Cloud VPN connectivity",

        "Participated in configuring IPSec VPN",

        "Participated in configuring IKEv2",

        "Participated in designing ACL security policies",

        "Participated in implementing Least Privilege access control",

        "Participated in isolating the Guest network from internal resources",

        "Participated in restricting Student access to sensitive servers",

        "Participated in designing the Server Farm",

        "Participated in designing the DMZ network",

        "Participated in designing the Branch Network",

        "Participated in designing the Remote VPN zone",

        "Participated in integrating Google Cloud Platform",

        "Participated in configuring Google Cloud VPC",

        "Participated in configuring Google Cloud Subnet",

        "Participated in designing HA VPN Gateway connectivity",

        "Participated in configuring Cloud Router and BGP peers",

        "Participated in deploying Cloud Backup VM",

        "Participated in deploying Cloud Monitoring VM",

        "Participated in configuring Cloud Storage backup",

        "Participated in configuring Cloud Storage versioning",

        "Participated in configuring IAM Service Account",

        "Participated in applying Least Privilege IAM permissions",

        "Participated in configuring Google Cloud Firewall Rules",

        "Participated in configuring Cloud Monitoring and Uptime Checks",

        "Participated in testing internal network connectivity",

        "Participated in testing Internet access",

        "Participated in testing Site-to-Site VPN",

        "Participated in testing Remote Access VPN",

        "Participated in testing BGP connectivity",

        "Participated in testing ACL security policies",

        "Participated in estimating deployment costs for multiple solution tiers",

        "Participated in documenting the complete network design and simulation"
    ],


    /* =====================================================
       PROJECT RESULTS
    ===================================================== */

    results: [

        "Successfully designed a complete university enterprise network architecture",

        "Successfully simulated the network using GNS3",

        "Successfully integrated VMware-based server systems",

        "Successfully integrated Google Cloud Platform into the network architecture",

        "Successfully implemented a Hybrid Cloud model",

        "Successfully separated user groups and network services through VLAN segmentation",

        "Successfully implemented Inter-VLAN Routing",

        "Successfully deployed OSPF across the campus network",

        "Successfully established routing between internal network zones",

        "Successfully configured BGP connectivity with Google Cloud",

        "Successfully used two IPSec VPN tunnels for high-availability cloud connectivity",

        "Successfully configured NAT/PAT for Internet access",

        "Successfully verified NAT translations",

        "Successfully configured DHCP for user VLANs",

        "Successfully implemented Site-to-Site VPN between headquarters and District 3 branch",

        "Successfully implemented Remote Access VPN",

        "Successfully implemented Cloud VPN",

        "Successfully verified Remote Access users could reach allowed LMS services",

        "Successfully verified Branch users could access allowed services through VPN",

        "Successfully implemented ACL-based network segmentation",

        "Successfully prevented Student VLAN from accessing Database Server",

        "Successfully allowed Student VLAN to access LMS Server",

        "Successfully prevented Guest users from accessing internal networks",

        "Successfully restricted Branch users from accessing sensitive Database services",

        "Successfully restricted Remote VPN users from accessing management VLANs",

        "Successfully designed a dedicated Server Farm",

        "Successfully designed a DMZ for public services",

        "Successfully deployed Google Cloud VPC network",

        "Successfully deployed subnet 10.100.0.0/24 on GCP",

        "Successfully deployed HA VPN Gateway on Google Cloud",

        "Successfully configured Cloud Router",

        "Successfully deployed cloud-backup VM",

        "Successfully deployed cloud-monitoring VM",

        "Successfully uploaded backup data to Google Cloud Storage",

        "Successfully enabled Cloud Storage versioning",

        "Successfully configured IAM Service Account using Least Privilege",

        "Successfully configured Google Cloud firewall rules",

        "Successfully configured Cloud Monitoring Uptime Check",

        "Successfully demonstrated Hybrid Cloud backup and monitoring",

        "Successfully designed three deployment cost packages: Basic, Standard and Enterprise",

        "Selected the Standard package as the proposed implementation model",

        "Final project grade: 10.0/10"
    ],


    /* =====================================================
       KEY FEATURES
    ===================================================== */

    features: [

        "Hierarchical Campus Network Design",

        "Core Layer",

        "Distribution Layer",

        "Access Layer",

        "Multiple VLAN segmentation",

        "Inter-VLAN Routing",

        "OSPF Dynamic Routing",

        "BGP Cloud Routing",

        "Route Redistribution",

        "Static Routing",

        "DHCP",

        "NAT",

        "PAT",

        "Static NAT",

        "Port Forwarding",

        "Site-to-Site VPN",

        "Remote Access VPN",

        "Cloud VPN",

        "IPSec Encryption",

        "IKEv2",

        "ACL Security Policies",

        "Least Privilege Access",

        "Guest Network Isolation",

        "Student Network Restrictions",

        "Server Farm",

        "DMZ",

        "Internal Wi-Fi",

        "Public Wi-Fi",

        "Branch Office Connectivity",

        "Hybrid Cloud",

        "Cloud Backup",

        "Cloud Monitoring",

        "High Availability VPN",

        "Dual ISP Architecture",

        "Cloud Storage Versioning",

        "IAM Access Control",

        "Disaster Recovery Support"
    ],


    /* =====================================================
       VLAN DESIGN
    ===================================================== */

    vlanDesign: [

        "VLAN 10 - BGH",

        "VLAN 20 - ADMIN",

        "VLAN 30 - STAFF_GV",

        "VLAN 40 - STUDENT",

        "VLAN 50 - LAB",

        "VLAN 60 - GUEST",

        "VLAN 70 - INTERNAL_WIFI",

        "VLAN 100 - LMS_SERVER",

        "VLAN 110 - DATABASE",

        "VLAN 120 - FILE_SERVER",

        "VLAN 130 - AUTH_SERVER",

        "VLAN 140 - MONITORING",

        "VLAN 150 - VM_SERVER",

        "VLAN 160 - BACKUP",

        "VLAN 200 - WEB_DMZ",

        "VLAN 210 - PROXY_DMZ",

        "VLAN 220 - DNS_DMZ",

        "VLAN 300 - BRANCH_USER",

        "VLAN 400 - REMOTE_VPN",

        "VLAN 500 - CLOUD_BACKUP"
    ],


    /* =====================================================
       SERVER SERVICES
    ===================================================== */

    serverSystems: [

        "LMS Server",

        "Database Server",

        "File Server",

        "Authentication Server",

        "Monitoring Server",

        "VM Server",

        "Backup Server",

        "Web Server",

        "Reverse Proxy",

        "DNS Server"
    ],


    /* =====================================================
       ROUTING
    ===================================================== */

    routingProtocols: [

        "Inter-VLAN Routing",

        "OSPF Area 0",

        "BGP",

        "Route Redistribution",

        "Static Route",

        "Default Route"
    ],


    /* =====================================================
       VPN ARCHITECTURE
    ===================================================== */

    vpnArchitecture: [

        "Site-to-Site VPN - Main Campus to District 3 Branch",

        "Remote Access VPN - Faculty and Staff Remote Users",

        "Cloud VPN - On-Premises to Google Cloud",

        "IPSec",

        "IKEv2",

        "Dual VPN Tunnels",

        "BGP over Cloud VPN"
    ],


    /* =====================================================
       CLOUD COMPONENTS
    ===================================================== */

    cloudComponents: [

        "Google Cloud VPC Network",

        "Subnet 10.100.0.0/24",

        "HA VPN Gateway",

        "Cloud Router",

        "BGP",

        "Compute Engine - cloud-backup",

        "Compute Engine - cloud-monitoring-vm",

        "Cloud Storage Bucket",

        "Cloud Storage Versioning",

        "IAM Service Account",

        "Google Cloud Firewall Rules",

        "Cloud Monitoring",

        "Uptime Check"
    ],


    /* =====================================================
       SECURITY CONTROLS
    ===================================================== */

    securityControls: [

        "VLAN Segmentation",

        "ACL",

        "Firewall",

        "NAT/PAT",

        "IPSec VPN",

        "Guest Network Isolation",

        "DMZ Isolation",

        "Least Privilege",

        "Zero Trust Principles",

        "IAM Access Control",

        "Cloud Firewall Rules",

        "Remote Access Authentication",

        "Backup Network Isolation"
    ],


    /* =====================================================
       TEST SCENARIOS
    ===================================================== */

    experiments: [

        "User VLAN to Default Gateway connectivity test",

        "Inter-VLAN connectivity test",

        "Server Farm connectivity test",

        "OSPF routing table verification",

        "Internet connectivity test",

        "NAT translation verification",

        "NAT statistics verification",

        "Branch User to LMS Site-to-Site VPN test",

        "Remote User to LMS Remote Access VPN test",

        "IPSec tunnel verification",

        "BGP peer verification",

        "Student-to-Database deny test",

        "Student-to-LMS allow test",

        "Guest-to-internal-network deny test",

        "Branch User-to-Database deny test",

        "Remote User-to-BGH deny test",

        "Cloud Storage backup upload test",

        "Google Cloud Uptime Check"
    ],


    /* =====================================================
       SKILLS DEVELOPED
    ===================================================== */

    skills: [

        "Enterprise Network Design",

        "Campus Network Architecture",

        "Network Simulation",

        "Network Administration",

        "IP Address Planning",

        "Subnetting",

        "VLAN Design",

        "Routing Configuration",

        "OSPF Configuration",

        "BGP Configuration",

        "VPN Configuration",

        "Firewall Configuration",

        "ACL Design",

        "Hybrid Cloud Networking",

        "Google Cloud Networking",

        "Cloud Security",

        "Network Troubleshooting",

        "Network Testing",

        "Security Policy Design",

        "High Availability Design",

        "Disaster Recovery Planning",

        "Cloud Backup Design",

        "Infrastructure Cost Planning",

        "Technical Documentation",

        "Teamwork",

        "Problem Solving"
    ],


    /* =====================================================
       KNOWLEDGE APPLIED
    ===================================================== */

    knowledge: [

        "Hierarchical Network Design",

        "Core-Distribution-Access Architecture",

        "VLAN",

        "Inter-VLAN Routing",

        "Subnetting",

        "IPv4 Addressing",

        "OSPF",

        "BGP",

        "Route Redistribution",

        "Static Routing",

        "DHCP",

        "NAT",

        "PAT",

        "Access Control List",

        "Virtual Private Network",

        "IPSec",

        "IKEv2",

        "Site-to-Site VPN",

        "Remote Access VPN",

        "DMZ",

        "Firewall",

        "Hybrid Cloud",

        "Google Cloud VPC",

        "Cloud Router",

        "Cloud Storage",

        "Cloud Monitoring",

        "Identity and Access Management",

        "Zero Trust",

        "Least Privilege",

        "High Availability",

        "Disaster Recovery"
    ],


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    technologies: [

        "GNS3",

        "VMware",

        "Google Cloud Platform",

        "Cisco IOS",

        "Cisco IOSv",

        "Cisco IOSvL2",

        "VPCS",

        "OSPF",

        "BGP",

        "IPSec",

        "IKEv2",

        "VLAN",

        "DHCP",

        "NAT/PAT",

        "ACL",

        "Google Cloud VPC",

        "Cloud VPN",

        "Cloud Router",

        "Compute Engine",

        "Cloud Storage",

        "Cloud Monitoring",

        "IAM"
    ],


    /* =====================================================
       TOOLS USED
    ===================================================== */

    tools: [

        "GNS3",

        "VMware",

        "Google Cloud Console",

        "Cisco IOS CLI",

        "Google Cloud VPC",

        "Google Cloud VPN",

        "Google Cloud Router",

        "Google Compute Engine",

        "Google Cloud Storage",

        "Google Cloud Monitoring",

        "IAM",

        "VPCS"
    ],


    /* =====================================================
       SYSTEM ARCHITECTURE
    ===================================================== */

    architecture: [

        "ISP1 and ISP2 - Redundant Internet Connections",

        "EDGE - NAT/PAT and Internet Gateway",

        "Firewall/VPN Gateway - Security and VPN Termination",

        "Core Layer - Central Network Backbone",

        "Distribution Layer - VLAN Routing",

        "Access Layer - End-user Connectivity",

        "User Zone - Management, Staff, Student, Lab and Guest",

        "Server Farm - Internal Services",

        "DMZ - Public Services",

        "VPN Zone - Remote and Branch Connectivity",

        "District 3 Branch Network",

        "Remote User Network",

        "Google Cloud Hybrid Cloud Environment"
    ],


    /* =====================================================
       HYBRID CLOUD WORKFLOW
    ===================================================== */

    workflow: [

        "Internal servers generate backup data",

        "Backup traffic enters the dedicated Backup VLAN",

        "Traffic passes through the on-premises firewall",

        "Backup traffic is encrypted using IPSec",

        "Traffic travels through redundant Cloud VPN tunnels",

        "Google Cloud HA VPN Gateway receives the traffic",

        "Cloud Router exchanges routes using BGP",

        "cloud-backup VM receives backup data",

        "Backup files are uploaded to Cloud Storage",

        "Cloud Storage versioning preserves backup history",

        "IAM Service Account controls cloud-backup permissions",

        "Cloud Monitoring checks VM and service availability",

        "Uptime Check detects failures",

        "Firewall rules allow only authorized VLANs",

        "Student and Guest networks remain blocked from cloud backup resources"
    ],


    /* =====================================================
       CLOUD BACKUP
    ===================================================== */

    cloudBackup: [

        "Backup VLAN: 10.10.160.0/28",

        "Monitoring VLAN: 10.10.140.0/28",

        "GCP Subnet: 10.100.0.0/24",

        "cloud-backup VM: 10.100.0.2",

        "Cloud Storage Bucket: nt-uit-lms-backup",

        "Storage Versioning Enabled",

        "IAM Service Account: lms-backup-sa",

        "Least Privilege Storage Object Creator/Viewer"
    ],


    /* =====================================================
       COST PROPOSALS
    ===================================================== */

    costProposals: [

        "Basic Package - approximately 680 million VND first-year total cost",

        "Standard Package - approximately 1.3 billion VND first-year total cost",

        "Enterprise Package - approximately 4.2 billion VND first-year total cost"
    ],


    /* =====================================================
       SELECTED DEPLOYMENT
    ===================================================== */

    selectedDeployment:
        "Standard Package - selected as the main proposed architecture because it balances functionality, security, scalability and cost.",


    /* =====================================================
       LIMITATIONS
    ===================================================== */

    limitations: [

        "The system is primarily implemented as a design and simulation rather than a large-scale physical deployment",

        "Physical servers, enterprise Wi-Fi and enterprise firewall infrastructure were not deployed in a real campus environment",

        "Google Cloud operating costs are estimated rather than measured over long-term production usage",

        "Large-scale redundancy and enterprise-grade high availability were not fully implemented",

        "Advanced centralized security monitoring was not fully deployed",

        "Multi-layer enterprise security mechanisms remain limited",

        "Long-term real-world traffic and performance data were not collected"
    ],


    /* =====================================================
       FUTURE DEVELOPMENT
    ===================================================== */

    futureDevelopment: [

        "Deploy the architecture on real campus infrastructure",

        "Increase the number of wireless access points",

        "Improve Core and Firewall redundancy",

        "Implement stronger high-availability mechanisms",

        "Add centralized logging",

        "Add advanced security monitoring",

        "Implement role-based access control",

        "Integrate multi-factor authentication",

        "Implement advanced network access control",

        "Expand Hybrid Cloud synchronization",

        "Improve disaster recovery automation",

        "Deploy real-time monitoring dashboards",

        "Optimize network performance at larger scale"
    ],


    /* =====================================================
       PROJECT DOCUMENT
    ===================================================== */

    reportPdf:
        "pdf/10_tkm-report.pdf",

    presentationPdf:
        "",


    /* =====================================================
       PROJECT COVER
    ===================================================== */

    image:
        "",


    /* =====================================================
       FEATURED PROJECT
    ===================================================== */

    featured:
        true
},

{
    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    id: 12,

    title:
        "Docker CIS Benchmark Security & Automation",

    subtitle:
        "Security Auditing, Hardening and CI/CD Automation for Docker Infrastructure Based on CIS Docker Benchmark",

    subject:
        "Lap trinh kich ban tu dong hoa cho quan tri va bao mat mang",

    classCode:
        "NT542.Q22",

    semester:
        "2026",

    academicYear:
        "2026",

    startDate:
        "April 2026",

    endDate:
        "May 2026",

    type:
        "Docker Security, DevSecOps & Automation Project",

    teamType:
        "Team Project",

    teamSize:
        4,

    status:
        "Completed",


    /* =====================================================
       GRADE
    ===================================================== */

    grade:
        "8.5/10",

    achievement:
        "Successfully designed and evaluated a containerized Docker infrastructure based on CIS Docker Benchmark, integrating manual security auditing, container hardening and automated CI/CD security checks, achieving a final project grade of 8.5/10.",


    /* =====================================================
       PROJECT DESCRIPTION
    ===================================================== */

    description:
        "This project focuses on evaluating and improving the security of a Docker-based web infrastructure according to CIS Docker Benchmark recommendations. The system is deployed on an AWS EC2 Ubuntu Server and consists of Nginx, PHP-FPM, MySQL and Redis containers managed through Docker Compose. The project combines manual CIS security auditing, Docker hardening and automated CI/CD workflows using GitHub Actions, a self-hosted runner and Bash audit scripts.",


    /* =====================================================
       PROJECT OBJECTIVE
    ===================================================== */

    objective:
        "To design a secure containerized infrastructure, evaluate Docker host, daemon, image and runtime configurations against CIS Docker Benchmark controls, identify security weaknesses, apply hardening techniques and automate deployment and security auditing through CI/CD workflows.",


    /* =====================================================
       MY ROLE
       Based directly on the assignment table in the report.
    ===================================================== */

    role:
        "System Architecture & CIS Host Configuration Auditor responsible for designing the overall containerized system architecture and performing CIS Docker Benchmark Module 1 security assessment for the Docker host environment.",


    /* =====================================================
       MY CONTRIBUTIONS
    ===================================================== */

    contributions: [

        "Designed the overall containerized system architecture",

        "Designed the communication flow between Nginx, PHP-FPM, MySQL and Redis",

        "Designed the separation between public-facing and internal container services",

        "Designed Docker internal network communication between application services",

        "Defined Nginx as the public reverse proxy and entry point",

        "Defined PHP-FPM as the application processing layer",

        "Defined MySQL as the persistent database service",

        "Defined Redis as the internal cache service",

        "Participated in designing the AWS EC2 deployment architecture",

        "Performed CIS Docker Benchmark Module 1 Host Configuration assessment",

        "Audited the /var/lib/docker storage configuration",

        "Verified whether Docker data was stored on a dedicated partition",

        "Audited membership of the Docker user group",

        "Evaluated the security risk associated with Docker group privileges",

        "Verified Docker Engine version",

        "Verified Docker storage driver configuration",

        "Checked that aufs storage driver was not used",

        "Checked that devicemapper storage driver was not used",

        "Evaluated Docker daemon configuration defaults",

        "Verified docker.service ownership",

        "Verified docker.service file permissions",

        "Verified docker.socket ownership",

        "Verified Docker configuration directory ownership",

        "Verified Docker configuration directory permissions",

        "Verified /var/run/docker.sock ownership",

        "Verified /var/run/docker.sock permissions",

        "Verified containerd socket ownership",

        "Verified containerd socket permissions",

        "Identified Host Configuration compliance issues",

        "Documented PASS, FAIL and security risks for CIS controls",

        "Provided security improvement recommendations for Docker Host hardening",

        "Completed assigned project responsibilities at 100%"
    ],


    /* =====================================================
       PROJECT RESULTS
    ===================================================== */

    results: [

        "Successfully designed a secure multi-container Docker architecture",

        "Successfully deployed the application environment on AWS EC2 Ubuntu Server",

        "Successfully deployed four major services: Nginx, PHP-FPM, MySQL and Redis",

        "Successfully configured Docker Compose for multi-container orchestration",

        "Successfully isolated internal application services using Docker internal networking",

        "Successfully prevented MySQL from being exposed directly to the Internet",

        "Successfully restricted Redis to internal communication",

        "Successfully configured Nginx as the public reverse proxy",

        "Successfully verified communication from Nginx to PHP-FPM",

        "Successfully verified PHP application connectivity to MySQL and Redis",

        "Successfully applied non-root users to application containers",

        "Successfully applied no-new-privileges security option",

        "Successfully retained Docker seccomp protection",

        "Successfully applied AppArmor docker-default profiles",

        "Successfully ensured containers were not running in privileged mode",

        "Successfully prevented containers from sharing host network namespace",

        "Successfully prevented containers from sharing host PID namespace",

        "Successfully prevented sensitive host directories from being mounted into containers",

        "Successfully prevented Docker socket from being mounted into containers",

        "Successfully configured memory limits during runtime security testing",

        "Successfully configured CPU resource allocation during runtime security testing",

        "Successfully evaluated Host Configuration, Docker Daemon, Image Security and Container Runtime modules",

        "Successfully identified compliant and non-compliant CIS Docker controls",

        "Successfully implemented GitHub Actions-based CI/CD automation",

        "Successfully deployed a self-hosted GitHub Actions Runner on EC2",

        "Successfully managed database credentials through GitHub Secrets",

        "Successfully generated environment variables without hardcoding credentials",

        "Successfully automated Docker image rebuild and container deployment",

        "Successfully automated CIS Docker Benchmark audit execution using Bash scripts",

        "Successfully displayed audit results through GitHub Actions workflow logs",

        "Final project grade: 8.5/10"
    ],


    /* =====================================================
       KEY FEATURES
    ===================================================== */

    features: [

        "CIS Docker Benchmark auditing",

        "Docker Host security assessment",

        "Docker Daemon security assessment",

        "Docker Image security assessment",

        "Container Runtime security assessment",

        "Manual security audit",

        "Manual remediation",

        "Automated security audit",

        "Container hardening",

        "Non-root containers",

        "No-new-privileges",

        "Seccomp protection",

        "AppArmor protection",

        "Docker internal network isolation",

        "Resource limitation",

        "Docker Compose orchestration",

        "CI/CD automation",

        "GitHub Actions deployment",

        "Self-hosted GitHub Runner",

        "GitHub Secrets",

        "Automated Docker build",

        "Automated container deployment",

        "Automated CIS audit",

        "Environment variable management",

        "Security compliance reporting"
    ],


    /* =====================================================
       CIS BENCHMARK MODULES
    ===================================================== */

    cisModules: [

        "Module 1 - Host Configuration",

        "Module 2 - Docker Daemon Configuration",

        "Module 3 - Container Images & Build File Security",

        "Module 4 - Container Runtime Security"
    ],


    /* =====================================================
       MY CIS MODULE
    ===================================================== */

    myCisModule: [

        "CIS Module 1 - Host Configuration",

        "Docker Host filesystem configuration",

        "Docker group membership",

        "Docker version validation",

        "Storage driver validation",

        "Docker service ownership and permissions",

        "Docker socket ownership and permissions",

        "Docker configuration directory permissions",

        "containerd socket ownership and permissions"
    ],


    /* =====================================================
       MANUAL AUDIT
    ===================================================== */

    manualAudit: [

        "docker inspect",

        "docker info",

        "docker ps",

        "docker history",

        "stat",

        "auditctl",

        "curl",

        "ss / netstat",

        "systemctl"
    ],


    /* =====================================================
       HARDENING MEASURES
    ===================================================== */

    hardeningMeasures: [

        "Run application containers using non-root users",

        "Enable no-new-privileges",

        "Use HEALTHCHECK",

        "Reduce exposed ports",

        "Separate internal Docker networks",

        "Remove unnecessary packages and development tools",

        "Avoid sensitive host directory mounts",

        "Use environment variables for configuration",

        "Use GitHub Secrets for sensitive credentials",

        "Apply network isolation between services",

        "Use seccomp security profiles",

        "Apply AppArmor profiles",

        "Avoid privileged containers",

        "Limit CPU and memory resources",

        "Avoid host network namespace",

        "Avoid host PID namespace",

        "Avoid Docker socket mounts"
    ],


    /* =====================================================
       AUTOMATION WORKFLOW
    ===================================================== */

    workflow: [

        "Developer pushes source code to GitHub",

        "GitHub Actions automatically triggers the deployment workflow",

        "Self-hosted Runner on AWS EC2 receives the workflow",

        "Runner checks out the latest source code",

        "GitHub Secrets are converted into runtime environment variables",

        "A .env file is generated automatically on EC2",

        "Docker Compose rebuilds the required Docker images",

        "Docker Compose restarts the application containers",

        "Container runtime status is verified",

        "Bash CIS audit script is executed automatically",

        "Docker security configuration is evaluated",

        "CIS audit results are displayed in GitHub Actions workflow logs"
    ],


    /* =====================================================
       APPLICATION ARCHITECTURE
    ===================================================== */

    architecture: [

        "End User / Browser",

        "AWS Security Group",

        "AWS EC2 Ubuntu Server",

        "Docker Compose Stack",

        "Nginx Container - Reverse Proxy and Public Entry Point",

        "PHP-FPM Container - Application Logic",

        "MySQL Container - Database Service",

        "Redis Container - Cache Service",

        "Docker Internal Network",

        "Docker Volume - Persistent Database Storage",

        "GitHub Actions - CI/CD Automation",

        "Self-hosted Runner - EC2 Workflow Executor",

        "Bash Audit Script - CIS Security Audit"
    ],


    /* =====================================================
       APPLICATION REQUEST FLOW
    ===================================================== */

    applicationFlow: [

        "User accesses the public IP address of AWS EC2",

        "Request passes through AWS Security Group",

        "Nginx receives the HTTP request",

        "Nginx forwards the request to PHP-FPM",

        "PHP application processes business logic",

        "PHP application accesses MySQL and Redis through Docker internal network",

        "Application response returns to Nginx",

        "Nginx sends the response back to the user"
    ],


    /* =====================================================
       SKILLS DEVELOPED
    ===================================================== */

    skills: [

        "Docker Security",

        "Container Security",

        "CIS Benchmark Auditing",

        "Security Compliance Assessment",

        "System Architecture Design",

        "Docker Host Hardening",

        "Linux Security",

        "DevSecOps",

        "CI/CD Automation",

        "Docker Compose",

        "AWS EC2 Deployment",

        "Cloud Infrastructure",

        "Security Auditing",

        "Bash Scripting",

        "Access Control",

        "Container Isolation",

        "Privilege Management",

        "Filesystem Permission Analysis",

        "Network Isolation",

        "Security Risk Analysis",

        "Troubleshooting",

        "Technical Documentation",

        "Teamwork",

        "Problem Solving"
    ],


    /* =====================================================
       KNOWLEDGE APPLIED
    ===================================================== */

    knowledge: [

        "CIS Docker Benchmark",

        "Docker Architecture",

        "Docker Client-Server Architecture",

        "Docker Daemon",

        "Docker Engine",

        "Container Runtime",

        "containerd",

        "runc",

        "Docker Networking",

        "Docker Storage Driver",

        "Linux File Permissions",

        "Linux User and Group Management",

        "Container Isolation",

        "Privilege Escalation",

        "Rootless Docker",

        "Seccomp",

        "AppArmor",

        "Linux Namespace",

        "Linux Cgroups",

        "Docker Socket Security",

        "Image Supply Chain Security",

        "Docker Content Trust",

        "Security Auditing",

        "Centralized Logging",

        "Resource Limitation",

        "Secrets Management",

        "CI/CD",

        "DevSecOps"
    ],


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    technologies: [

        "Docker",

        "Docker Compose",

        "AWS EC2",

        "Ubuntu Linux",

        "Nginx",

        "PHP-FPM",

        "PHP",

        "MySQL",

        "Redis",

        "GitHub Actions",

        "GitHub Secrets",

        "Bash",

        "systemd",

        "AppArmor",

        "Seccomp"
    ],


    /* =====================================================
       TOOLS USED
    ===================================================== */

    tools: [

        "Docker CLI",

        "Docker Compose",

        "AWS EC2",

        "AWS Security Group",

        "GitHub",

        "GitHub Actions",

        "GitHub Self-hosted Runner",

        "Bash",

        "docker inspect",

        "docker info",

        "docker ps",

        "docker history",

        "stat",

        "auditctl",

        "systemctl",

        "curl",

        "ss",

        "netstat"
    ],


    /* =====================================================
       SECURITY STRENGTHS
    ===================================================== */

    securityStrengths: [

        "Important Docker configuration files use appropriate ownership and permissions",

        "Firewall is enabled",

        "Docker daemon is not exposed directly through remote TCP",

        "Application-built images use non-root users",

        "Application containers use no-new-privileges",

        "Seccomp protection remains enabled",

        "Containers use AppArmor docker-default",

        "Containers do not run in privileged mode",

        "Containers do not use host networking",

        "Containers do not share the host PID namespace",

        "Sensitive host directories are not mounted into containers",

        "Docker socket is not mounted into containers",

        "Docker internal network isolates database and cache services",

        "Application Dockerfiles use COPY rather than ADD",

        "Secrets are not hardcoded directly in application Dockerfiles"
    ],


    /* =====================================================
       SECURITY FINDINGS / LIMITATIONS
    ===================================================== */

    limitations: [

        "/var/lib/docker is not mounted on a separate filesystem partition",

        "SSH root login hardening is not fully implemented",

        "auditd coverage is incomplete for important Docker components",

        "Docker daemon still operates in rootful mode",

        "Centralized remote logging is not fully configured",

        "Docker TLS authentication is not configured for remote daemon access",

        "Docker Content Trust is not enabled",

        "Some base images contain unnecessary packages and development tools",

        "Some images contain SUID or SGID files",

        "User namespace remapping is not enabled",

        "Some services remain bound to 0.0.0.0",

        "Some images still use the latest tag",

        "Some image and runtime configurations require further CIS remediation"
    ],


    /* =====================================================
       FUTURE DEVELOPMENT
    ===================================================== */

    futureDevelopment: [

        "Move /var/lib/docker to a dedicated filesystem partition",

        "Implement stronger SSH hardening",

        "Deploy auditd and complete Docker audit rules",

        "Evaluate Docker rootless mode",

        "Implement centralized logging",

        "Enable secure Docker daemon TLS authentication when remote API access is required",

        "Enable Docker Content Trust",

        "Use image vulnerability scanning in the CI/CD pipeline",

        "Remove unnecessary packages from production images",

        "Remove unnecessary SUID and SGID permissions",

        "Enable user namespace remapping",

        "Use explicit version tags instead of latest",

        "Restrict public port bindings to required network interfaces",

        "Expand automated CIS compliance reporting",

        "Automatically remediate selected CIS failures",

        "Add security gates to CI/CD before deployment"
    ],


    /* =====================================================
       PROJECT DOCUMENT
    ===================================================== */

    reportPdf:
        "pdf/11_tdh-report.pdf",

    presentationPdf:
        "",


    /* =====================================================
       PROJECT COVER
    ===================================================== */

    image:
        "",


    /* =====================================================
       FEATURED PROJECT
    ===================================================== */

    featured:
        true
}

];