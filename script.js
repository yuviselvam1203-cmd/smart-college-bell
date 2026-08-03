let schedules = [];
let bells = [];

function createSchedule(){

  const name =
    document.getElementById('scheduleName').value;

  if(!name) return;

  schedules.push({
    id: Date.now(),
    name,
    active: schedules.length === 0
  });

  renderSchedules();
  renderSelect();

  document.getElementById('scheduleName').value='';
}

function renderSchedules(){

  const list =
    document.getElementById('scheduleList');

  list.innerHTML='';

  schedules.forEach(s => {

    list.innerHTML += `
      <div class="schedule-item ${s.active ? 'active':''}">
        <span>${s.name} ${s.active ? '🟢':''}</span>
      </div>
    `;
  });
}

function renderSelect(){

  const select =
    document.getElementById('scheduleSelect');

  select.innerHTML='';

  schedules.forEach(s => {

    select.innerHTML += `
      <option value="${s.id}">${s.name}</option>
    `;
  });
}

function addBellTime(){

  const scheduleId =
    document.getElementById('scheduleSelect').value;

  const time =
    document.getElementById('bellTime').value;

  const duration =
    document.getElementById('duration').value;

  if(!time) return;

  bells.push({scheduleId, time, duration});

  renderBells();

  document.getElementById('bellTime').value='';
}

function renderBells(){

  const list =
    document.getElementById('bellList');

  list.innerHTML='';

  bells.forEach(b => {

    const schedule =
      schedules.find(s => s.id == b.scheduleId);

    list.innerHTML += `
      <div class="bell-item">
        <span>${schedule?.name || ''} - ${b.time}</span>
        <span>${b.duration}s</span>
      </div>
    `;
  });
}
