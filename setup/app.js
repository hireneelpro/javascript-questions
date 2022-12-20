const questionText = document.querySelectorAll('.question-text');
const questionButton = document.querySelectorAll('.question-btn')
const questions = document.querySelectorAll('.question')
// console.log(questionButton)
// console.log(questionText)
questions.forEach(function (each) {
    const btn = each.querySelector('.question-btn')
    // console.log(btn)
    btn.addEventListener("click", function () {
        
        
        questions.forEach(function (x) {
            if (x !== each) {
                x.classList.remove('show-text')
            }
        })
        each.classList.toggle('show-text')
    })
    
})
//  Explanation : get 3 question by class in node array 
// set forEach loop to check for click event for 3 questionButton
// as any one click listened  another forEach loop is applied which will again check using if that clicked question !== each question( only other 2 questions will only  selected and  .show-text will be removed if it is there)   then toggle class will be applied to clicked question class only.  

//  