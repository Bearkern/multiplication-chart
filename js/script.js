const multiChart = document.getElementById('multiChart');
console.log('multiChart:', multiChart);

for (let x = 2; x < 10; x++) {
  const multiArea = document.createElement('li');
  multiArea.setAttribute('class', 'col');

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'multi-area')
  ul.innerHTML = `<li class="multiplicand"><span>${x}</span></li>`;

  for (let y = 1; y < 10; y++) {
    ul.innerHTML += 
      `<li>${x} × ${y} = ${x * y}</li>`;
    multiArea.appendChild(ul);
  }
  multiChart.appendChild(multiArea)
}
