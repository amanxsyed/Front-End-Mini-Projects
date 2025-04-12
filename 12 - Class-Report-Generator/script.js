document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => generateReport(data))
    .catch(error => console.error(error)); 
});

function generateReport(data){
    let tableBody = document.getElementById('student-result');
    data.forEach(student => {
        let totalMarks = Object.values(student.subjects).reduce((a,b)=> a+b,0);
        let averageMarks = totalMarks / Object.keys(student.subjects).length;
        let grade = getGrade(averageMarks);

        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.roll_no}</td>
            <td>${student.name}</td>
            <td>${totalMarks}</td>
            <td>${averageMarks.toFixed(2)}</td>
            <td>${grade}</td>
        `;
        tableBody.appendChild(row);
    });
}
function getGrade(avg){
    if(avg >=90){
        return 'A+';}
    else if(avg >=80){
        return 'A';}    
    else if(avg >=70){  
        return 'B';}
    else if(avg >=60){
        return 'C';}
    else {
        return 'F';}
}
