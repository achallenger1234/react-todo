import React from "react";
import "./styles.css";

export const App =() => {
  return (
      <>
        <div className="input-area">
          <input placeholder="TODOを入力" />
          <button>追加</button>
        </div>
        <div className="imcomplete-area">
          <p>未完了のTODO</p>
          <ul>
            <div>
              <li>あああ</li>
              <button>完了</button>
              <button>削除</button>
            </div>
            <div>
              <li>あああ</li>
              <button>完了</button>
              <button>削除</button>
            </div>
          </ul>
        </div>
        <div className="complete-area">
          <p>未完了のTODO</p>
            <ul>
              <div>
                <li>あああ</li>
                <button>完了</button>
              </div>
            </ul>        
        </div>
      </>
    );
}