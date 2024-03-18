// Songs/Stat/Levelのテーブルにカラムを追加する
function addColumnToTable() {
    var table = document.querySelectorAll('table')[0]; // テーブルを取得

    if (table) {
        // テーブルが見つかった場合
        fetchPlayerDataTable(50569054, 10)
            .then(dataTable => {
                console.log('取得したテーブル:', table);
                console.log('取得したテーブル:', dataTable);

                // 追加のデータ設定
                table.rows[0].insertCell(0)
                table.rows[0].cells[0].innerHTML = 'FCed'
                for (var i = 1; i < table.rows.length; i++) {
                    var newRowCell = table.rows[i].insertCell(0); // 新しいセルを先頭に追加

                    if (dataTable.rows[i].cells[5].innerText == "FULLCOMBO") {
                        newRowCell.innerHTML = '○'; // 新しいセルに表示するデータを設定
                        newRowCell.style.color = '#21efef'; // 文字色を青に設定
                    } else {
                        newRowCell.innerHTML = '×'; // 新しいセルに表示するデータを設定
                        newRowCell.style.color = '#fba8c1'; // 文字色を赤に設定
                    }
                }
            })
            .catch(error => {
                console.error('テーブルの取得中に問題が発生しました:', error);
            });
    } else {
        // テーブルが見つからなかった場合のエラーハンドリング
        console.error('テーブルが見つかりませんでした。');
    }
}

// PlayerDataページからテーブルを取得する
function fetchPlayerDataTable(id, level) {
    // PlayerDataページのURL
    var url = `http://ereter.net/iidxplayerdata/${id}/level/${level}`;

    // fetch()を使用してページにアクセスし、HTMLを取得
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // レスポンスをテキスト形式で取得
        })
        .then(html => {
            // 取得したHTMLからテーブルを取得
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html'); // HTMLをDOMに解析
            var table = doc.querySelector('table'); // ページからテーブルを取得
            if (table) {
                // テーブルが見つかった場合、操作を行う
                return table
            } else {
                throw new Error('Table not found on the page');
            }
        });
}

// ページが読み込まれたときにaddColumnToTable()関数を実行
window.addEventListener('load', addColumnToTable);