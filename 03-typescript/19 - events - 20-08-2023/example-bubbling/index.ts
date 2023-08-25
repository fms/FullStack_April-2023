// Get the entire hierarchy...
let tags = document.querySelectorAll(":not(body)");
// ... and set up the same lister on all
// Order of execution:
// 1. Capture
// 2. Target (event source) - the order in which the EventListeners were added.
// 3. Bubble
tags.forEach((x) => x.addEventListener("click", reportBubble));
tags.forEach((x) => x.addEventListener("click", reportCapture, true));

// Add another EventListener just for the <div> in order to demonstrate multiple
// EventListeners on the same element, and also the difference between the
// event.stopPropagation() and event.stopImmediatePropagation() below.
let div = document.querySelector(".red");
if (div) {
  div.addEventListener("click", (event) => {
      let clicked = event.target as HTMLElement; // The element originating the event
      let actual = event.currentTarget as HTMLElement; // The element processing the event (bubbling)
      let prefix = clicked === actual ? "|" : " ";

      console.log(`${prefix}${event.type}-extra${prefix}: ${clicked.tagName} ${actual.tagName}`);
    }, true);
}
// To remove a defined EventListener, user removeEventListener using the same
// arguments used in the addEventListener()
// The following removes the reportCapture event listener above.
// tags.forEach((x) => x.removeEventListener("click", reportCapture, true));

/**
 * This is the event listener we want to register.
 *
 * @remarks
 * We could have used an arrow function, but since we want to register the same
 * callback to multiple listeners we're using a single implementation (this function)
 * and use it instead.
 *
 * @param event - the triggering event
 */
function reportBubble(event: Event) {
  reportStep(event, "Bubble");
}

function reportCapture(event: Event) {
  reportStep(event, "Capture");
}

function reportStep(event: Event, stepName: string) {
  let clicked = event.target as HTMLElement; // The element originating the event
  let actual = event.currentTarget as HTMLElement; // The element processing the event (bubbling)
  let prefix = clicked === actual ? "|" : " ";

  console.log(
    `${prefix}${event.type}-${stepName}${prefix}: ${clicked.tagName} ${actual.tagName}`
  );

  if (clicked === actual && clicked.className === "red" && stepName === "Capture") {
    // event.stopPropagation() stops the bubble/capture flow at this stage and object
    //   event.stopPropagation();

    // event.stopImmediatePropagation() stop bubble/capture flow this EventListener
    //   event.stopImmediatePropagation();
    clicked.style.backgroundColor = "yellow";
  }
}
