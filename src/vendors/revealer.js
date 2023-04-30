import revealer from "circular-revealer";

const revealTrigger = (
  revealElementSelector,
  anchorSelector,
  revealAction,
  hideAction
) => {
  const item = revealer({
    revealElementSelector,
    options: {
      anchorSelector,
    },
  });

  if (!item.isRevealed()) {
    item.reveal();
    revealAction();
  } else {
    item.hide();
    hideAction;
  }
};

export default revealTrigger;
