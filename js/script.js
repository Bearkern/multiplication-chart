const multiChart = document.getElementById('multiChart');

for (let x = 2; x < 10; x++) {
  const multiWrapper = document.createElement('li');
  multiWrapper.setAttribute('class', 'col');

  const multiArea = document.createElement('ul');
  multiArea.setAttribute('class', 'multi-area')
  multiArea.innerHTML = `<li class="multiplicand"><span>${x}</span></li>`;

  for (let y = 1; y < 10; y++) {
    multiArea.innerHTML +=
      `<li>${x} × ${y} = ${x * y}</li>`;
  }
  
  multiWrapper.appendChild(multiArea);
  multiChart.appendChild(multiWrapper);
}