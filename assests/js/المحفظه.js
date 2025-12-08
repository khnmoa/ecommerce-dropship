  const invoicesData = [
      { id: 8362, date: '2025\\10\\24', type: 'سحب أرباح',amount: 5,  currency: '<img class="rl" src="/image/Saudi_Riyal_Symbol.svg.png">' 
 },
      { id: 8361, date: '2025\\10\\20', type: 'شحن رصيد', amount: 5 },
      { id: 8360, date: '2025\\10\\18', type: 'سحب أرباح', amount: 5},
      { id: 8359, date: '2025\\10\\15', type: 'سحب أرباح' , amount:5},
    ];

    const invoicesEl = document.getElementById('invoices');
    function renderInvoices(){
      invoicesEl.innerHTML = '';
      invoicesData.forEach((inv, idx) => {
        const item = document.createElement('div');
        item.className = 'invoice';
       item.innerHTML = `
 

    <div>
      <div style="font-weight:700">الفاتورة #${inv.id}</div>
      <div style="font-size:13px;color:var(--muted)">
        ${inv.date} • ${inv.amount} <img class="rl" src="/image/Saudi_Riyal_Symbol.svg.png">
      </div>
    </div>
  </div>

  <div style="display:flex;gap:12px;align-items:center">
    <div class="badge ${inv.type === 'شحن رصيد' ? 'topup' : 'withdraw'}">
      ${inv.type}
    </div>

    <button class="btn ghost" onclick="toggleDetails(${idx})">📄</button>
  </div>
`;

        invoicesEl.appendChild(item);

        // تفاصيل قابلة للفتح (مخفية)
        const details = document.createElement('div');
        details.style.background = '#fff';
        details.style.padding = '10px 14px';
        details.style.borderRadius = '10px';
        details.style.marginTop = '8px';
        details.style.display = 'none';
        details.innerHTML = `<div style="color:var(--muted);font-size:13px">تفاصيل: هذه فاتورة تجريبية لعملية ${inv.type}. المبلغ: ${inv.amount} ر.س.</div>`;
        invoicesEl.appendChild(details);
      });
    }
    renderInvoices();

    function toggleDetails(index){
      // تفاصيل بعد العنصر
      const nodes = invoicesEl.children;
      // كل item + details => 2 عناصر لكل فاتورة
      const detailsNode = nodes[index*2 + 1];
      detailsNode.style.display = detailsNode.style.display === 'none' ? 'block' : 'none';
    }

  
    document.querySelectorAll('.tab').forEach(t => {
      t.addEventListener('click', ()=> {
        document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
        t.classList.add('active');
      });
    });

    // زر تأكيد السحب (مؤقت)
    document.getElementById('confirm-btn').addEventListener('click', ()=>{
      const amount = document.getElementById('amount').value || '0';
      alert('تم تقديم طلب سحب بمبلغ: ' + amount);
    });

    document.getElementById('amount').addEventListener('input', (e)=>{
     
      const val = e.target.value || '500';
    
    });