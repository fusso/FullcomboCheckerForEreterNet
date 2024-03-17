let rows = document.querySelectorAll("tr");
console.log(rows.values);

function addColumnToTable() {
    var tables = document.querySelectorAll('table'); // テーブルのIDが 'example-table' の場合
    var table = tables[0];

    if (table) {
        // テーブルが見つかった場合

        // 各行に新しいセルを追加
        for (var i = 0; i < table.rows.length; i++) {
            var newRowCell = table.rows[i].insertCell(0); // 新しいセルを末尾に追加

            if (i % 2 == 0) {
                newRowCell.innerHTML = '○'; // 新しいセルに表示するデータを設定
                newRowCell.style.color = '#21efef'; // 文字色を青に設定
            } else {
                newRowCell.innerHTML = '×'; // 新しいセルに表示するデータを設定
                newRowCell.style.color = '#fba8c1'; // 文字色を赤に設定
            }
        }

        table.rows[0].cells[0].innerHTML = 'FCed'
    } else {
        // テーブルが見つからなかった場合のエラーハンドリング
        console.error('テーブルが見つかりませんでした。');
    }
}

// ページが読み込まれたときにaddColumnToTable()関数を実行
window.addEventListener('load', addColumnToTable);