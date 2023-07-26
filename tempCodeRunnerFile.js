function crateElement() {
    const div = document.createElement('div');
    div.id = 'test';
    document.body.append(crateElement);
}

crateElement();

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}

deleteElement();