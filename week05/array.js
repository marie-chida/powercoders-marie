var topics = ["HTML","CSS","JS"];
console.log(topics[1]);
topics.forEach

var skills = [
    ['JavaScript','Python','R'],
    ['VSC','GitHub','ABC'],  
]
//nested array, multidimentional array
console.log(skills[1][1]);
console.table(skills);
console.table(skills[1]);


var skills = [
    {
        frontend: 'JavaScript',
        backend: ['JavaScript', 'Python']
        dataScience ['Python','R']
    },
    {
        editor: 'VSC',
        versionControl: ['GitHub', 'Git']
    }
}
//property names
console.log(skills[1].[editor]);
console.log(skills[1].[editor]);

topict.forEach(topic => console.log(topic));


for(let i=0, 1 < topics.length; i++){

    if(topics[1] !== undefined){
        console.log(topics[i]);
    }

}
//if I push, it will be added at the end.
topic.push('git');
topic.pop('React');

//it removes the first one
topic.shift();

//not only value, it takes all array out.
topics.splice(2,1);

//it doesn't work. it needs value to pop.
topics.pop(2);

topics.shift();

//array method to merge two lists
let mergeTopics = topics.concat(topics2);
console.table(mergedTopics);

