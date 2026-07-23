const ledgerData = [
    { id: 'TX511777', merchant: 'Aria Airlines', location: 'Warsaw, PL', amount: '$1505.44', disposition: 'REVIEW', class: 'disp-review' },
    { id: 'TX213569', merchant: 'QuickCart Grocery', location: 'Manila, PH', amount: '$2356.57', disposition: 'BLOCKED', class: 'disp-blocked' },
    { id: 'TX191041', merchant: 'Perle Jewellers', location: 'Dubai, AE', amount: '$97.56', disposition: 'BLOCKED', class: 'disp-blocked' },
    { id: 'TX580428', merchant: 'Bellhouse Hotel Grp', location: 'Prague, CZ', amount: '$1884.43', disposition: 'REVIEW', class: 'disp-review' },
    { id: 'TX705899', merchant: 'Perle Jewellers', location: 'Dubai, AE', amount: '$76.45', disposition: 'BLOCKED', class: 'disp-blocked' },
    { id: 'TX876479', merchant: 'Bellhouse Hotel Grp', location: 'Prague, CZ', amount: '$1050.53', disposition: 'CLEARED', class: 'disp-cleared' },
    { id: 'TX915372', merchant: 'Fenwick Electronics', location: 'Toronto, CA', amount: '$335.19', disposition: 'CLEARED', class: 'disp-cleared' },
    { id: 'TX176743', merchant: 'Perle Jewellers', location: 'Dubai, AE', amount: '$535.91', disposition: 'CLEARED', class: 'disp-cleared' },
    { id: 'TX349987', merchant: 'Nocturne Electronics', location: 'Lagos, NG', amount: '$1389.90', disposition: 'CLEARED', class: 'disp-cleared' }
];

const priorityData = [
    {
        id: 'TX582910',
        location: 'Lagos, NG',
        timeAgo: '00:41',
        amount: '$2,847.00',
        score: '92',
        reasons: [
            'High velocity, 6 tx / hour',
            'New device fingerprint',
            'Billing / IP geo mismatch'
        ]
    },
    {
        id: 'TX582887',
        location: 'Macau, MO',
        timeAgo: '02:15',
        amount: '$1,204.50',
        score: '81',
        reasons: [
            'Card-not-present channel',
            'High-risk merchant category'
        ]
    },
    {
        id: 'TX582901',
        location: 'Dubai, AE',
        timeAgo: '03:02',
        amount: '$3,990.00',
        score: '88',
        reasons: [
            'Amount far above baseline',
            'Transaction at unusual hour'
        ]
    }
];

function renderLedger() {
    const tbody = document.getElementById('ledger-body');
    let html = '';

    ledgerData.forEach(tx => {
        html += `
            <tr>
                <td class="tx-id">${tx.id}</td>
                <td>
                    <div class="merchant-name">${tx.merchant}</div>
                    <div class="merchant-location">${tx.location}</div>
                </td>
                <td class="amount">${tx.amount}</td>
                <td class="disposition-cell">
                    <span class="disp-badge ${tx.class}">${tx.disposition}</span>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

function renderPriorityCases() {
    const list = document.getElementById('priority-list');
    let html = '';

    priorityData.forEach(p => {
        let reasonsHtml = '';
        p.reasons.forEach(r => {
            reasonsHtml += `<div>${r}</div>`;
        });

        html += `
            <div class="priority-card">
                <div class="priority-ribbon">PRIORITY</div>
                
                <div class="priority-amount">${p.amount}</div>
                <div class="priority-score">RISK SCORE ${p.score}</div>
                
                <div class="priority-meta">
                    ${p.id} · ${p.location}<br>
                    Flagged ${p.timeAgo} ago
                </div>
                
                <div class="priority-reasons">
                    ${reasonsHtml}
                </div>
                
                <div class="priority-actions">
                    <button class="btn-clear">Clear</button>
                    <button class="btn-block">Block card</button>
                </div>
            </div>
        `;
    });

    list.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderLedger();
    renderPriorityCases();
});
