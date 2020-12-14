"use strict";
import React, { Component } from "react";

import styles from "./index.less";
const print = function(value) {
  console.log(value);
};
class Block_0 extends Component {
  render() {
    return (
      <div className={styles.mod}>
        <div className={styles.box}>
          <div className={styles.main}>
            <img
              className={styles.banner}
              src={require("https://img.alicdn.com/tfs/TB1oiAbz1H2gK0jSZJnXXaT1FXa-1404-788.png")}
              alt=""
            />
            <img
              className={styles.play}
              src={require("https://img.alicdn.com/tfs/TB1IpkXz5_1gK0jSZFqXXcpaXXa-240-240.png")}
              alt=""
            />
          </div>
          <div className={styles.block}>
            <span className={styles.organization} lines={"1"}>
              众筹
            </span>
            <span className={styles.organizationNext} lines={"1"}>
              ｜全网首发
            </span>
          </div>
          <span className={styles.title} lines={"1"}>
            对饮茶酒 手工茶罐与小对杯
          </span>
          <span className={styles.summary} lines={"2"}>
            宽杯、小杯自在搭配，喝茶喝酒都很适合。手工制宽杯、小杯自在搭配，喝茶喝酒都很适合。手工制做…
          </span>
          undefined
        </div>
      </div>
    );
  }
}
export default Block_0;
