function showSemester (sem,btn){
    let content = "";
    switch (sem){
        case 1:
            content = `
            
        <h2 id="semester">semester 1</h2>
        <h3 id="semestet-c">CGPA:7.87</h3>
        <ul>
            <li>Fundamentals of Computers</li>
            <li>Programming in C</li>
            <li>Mathematical Foundation</li>
            <li>Accounting for Everyone</li>
            <li>Information technology-Lab</li>
            <li>Programming in C-Lab</li>
        </ul> `;
        
        break;

        case 2:
            content = `
            <h2 id="semester">semester 2</h2>
        <h3 id="semestet-c">CGPA:7.97</h3>
        <ul>
            <li>Data Structures using C</li>
            <li>Object Oriented Concepts using Java</li>
            <li>Discrete Mathematical Structures</li>
            <li>Public Finance</li>
            <li>Digital Fluency</li>
            <li>Data Structures-Lab</li>
            <li>JAVA-Lab</li>
        </ul>`;
        break;

        case 3:
            content =`
             <h2 id="semester">semester 3</h2>
        <h3 id="semestet-c">CGPA:8.1</h3>
        <ul>
            <li>Database Management System</li>
            <li>C# and Dot Net Framework</li>
            <li>Computer Communication and Netwirks</li>
            <li>Advertising Skills</li>
            <li>Open Source Tools</li>
            <li>Database Management System-Lab</li>
            <li>C# and Dot Net Framework-Lab</li>
        </ul>`;
        break;

        case 4:
            content =`
            <h2 id="semester">semester 4</h2>
        <h3 id="semestet-c">CGPA:8.15</h3>
        <ul>
            <li>Python Programming</li>
            <li>Computer Multimedia & Animation</li>
            <li>Operating System Concepts</li>
            <li>Financial Education and Investment Awarenese</li>
            <li>Python Programming-Lab</li>
            <li>Computer Multimedia & Animation-Lab</li>
        </ul>`;
        break;

        case 5:
            content = `
            <h2 id="semester">semester 5</h2>
        <h3 id="semestet-c">CGPA:</h3>
        <ul>
            <li>Design and Analysis of Algorithms</li>
            <li>Statistical Computing and R Programming</li>
            <li>Software Engineering</li>
            <li>Cloud Computing</li>
            <li>Digital Marketing</li>
            <li>Design and Analysis of Algorithms-Lab</li>
            <li>R Programming-Lab</li>
        </ul>`;
        break;

        case 6:
            content = `
            <h2 id="semester">semester 6</h2>
        <h3 id="semestet-c">CGPA:</h3>
        <ul>
            <li>PHP</li>
            <li>Advanced Java</li>
            <li>Artificial Intelligence</li>
            <li>Fundamentals od Data Science</li>
            <li></li>
            <li>PHP-Lab</li>
            <li>Advanced Java-Lab</li>
         </ul>`;
        break;


        default:
            content = "No data available"

    }
    document.getElementById("button").innerHTML = content;
    console.log(showSemester);
}
window.onload = function() {
    showSemester(1);
}







