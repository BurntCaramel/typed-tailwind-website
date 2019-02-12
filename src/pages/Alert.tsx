import React from "react";
import { ctss as c, sm, lg, bg, border, text, font, leading, mx, my, px, py, w, h, rounded, display, relative, absolute, fill, items, flexItem, textStyle, opacity } from "../tailwind/functions";

export default function AlertPage() {
  return (
    <div className={c(py("8", null))}>
      <div className={c(my(null, "8"))}>
        <div className={c(
          bg("red-lightest"),
          border("red-light"),
          text("red-dark"),
          px("4"),
          py("3"),
          rounded(),
          relative()
        )} role="alert">
          <strong className={c(font("bold"))}>{"Holy smokes! "}</strong>
          <span className={c(
            display("block"),
            sm(display("inline"))
          )}>Something seriously bad happened.</span>
          <span className={c(
            absolute("pin-t", "pin-b", "pin-r"),
            px("4"),
            py("3")
          )}>
            <svg className={c(
              fill("current"),
              h("6"),
              w("6"),
              text("red")
            )} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
      </div>

      <div className={c(my(null, "8"))}>
        <div className={c(
          bg("indigo-darkest"),
          text("center"),
          py("4"),
          lg(px("4"))
        )}>
          <div className={c(
            px("2"),
            py("2"),
            bg("indigo-darker"),
            display("flex"),
            items("center"),
            text("indigo-lightest"),
            leading("none"),
            lg(
              display("inline-flex"),
              rounded("full")
            )
          )} role="alert">
            <span className={c(
              display("flex"),
              rounded("full"),
              bg("indigo"),
              textStyle("uppercase"),
              px("2"),
              py("1"),
              text("xs"),
              font("bold"),
              mx(null, "3")
            )}>New</span>
            <span className={c(
              font("semibold"),
              mx(null, "2"),
              text("left"),
              flexItem("auto")
            )}>Get the coolest t-shirts from our brand new store</span>
            <svg className={c(
              fill("current"),
              opacity("75"),
              h("4"),
              w("4")
            )} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
          </div>
        </div>
      </div>

      <div className={c(my(null, "8"))}>
        <div className={c(
          // bg-orange-lightest border-l-4 border-orange text-orange-dark p-4
          bg("orange-lightest"),
          border("orange", { l: "4" }),
          text("orange-dark"),
          px("4"),
          py("4")
        )} role="alert">
          <p className={c(font("bold"))}>Be Warned</p>
          <p>Something not ideal might be happening.</p>
        </div>
      </div>
    </div>
  );
}
