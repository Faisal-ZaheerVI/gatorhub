function addEvent() {
    var divSelected = document.getElementById('agenda_events');
    var newEventCode = `<div class="v1_165"></div>
    <span class="v1_166">6:00pm - Group Work</span>`;

    var newEventDiv = document.createElement('div');
    newEventDiv.innerHTML = newEventCode;
    divSelected.appendChild(newEventDiv);
}