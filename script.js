new Vue({
	el:"#flashcards-app",
	data:{
    questionField:"",
    answerField:"",
    categoryField:"",
		cards:[
			{
				question:"What year was IUPUI founded?",
				answer:"1969",
				category:"history",
				flipped:false
			},{
				question:"What is 2+2?",
				answer:"Fish",
				category:"math",
				flipped:false
			},{
				question:"Is mayonnaise an instrument?",
				answer:"No",
				category:"science",
				flipped:false
			}
		]
	},
	methods:{
		cardFlip:function(idx){
			if (this.cards[idx].flipped)
        this.cards[idx].flipped=false;
			else this.cards[idx].flipped=true;
			//console.log(this.cards[idx].flipped);
		},
    submit:function(){
			this.cards.push({
        question:this.questionField,
        answer:this.answerField,
        category:this.categoryField,
        flipped:false
      });
    }
	}
})