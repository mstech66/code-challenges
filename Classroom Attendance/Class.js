function getStudents(classroom) {
    let teacher, assistant, students;
    let { hasTeachingAssistant, classList } = classroom;

    if (hasTeachingAssistant) {
        [teacher, assistant, ...students] = classList;
    }
    else {
        [teacher, ...students] = classList;
    }
    return students;
}

console.log(getStudents({
    hasTeachingAssistant: false,
    classList: ["Tan", "Mona", "Matt", "Stephan"]
}));