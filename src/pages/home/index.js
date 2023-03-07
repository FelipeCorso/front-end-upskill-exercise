import React from "react";
import Report from "../../components/report/Report";

export default function Home() {
  return (
    <main>
      <h1>Stupid game</h1>
      <section>
        Canvas
        <button>Finish</button>
        <button>Play</button>
      </section>
      <section>
        <Report
          items={[
            {
              color: "red",
              hits: 12,
              streak: 10,
              avgClickTime: "0.5s",
            },
          ]}
        />
      </section>
    </main>
  );
}
