import { useState } from "react";
import Section from "./components/section";
import FeedbackOptions from "./components/feedbackOptions";
import Statistics from "./components/statistics";
import Notification from "./components/notification";
import data from "./feedbackData.json";

function App() {
  const [goodFbk, setGoodFbk] = useState(0);
  const [neutralFbk, setNeutralFbk] = useState(0);
  const [badFbk, setBadFbk] = useState(0);

  const handleFbk = (id) => {
    switch (id) {
      case "good":
        setGoodFbk((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutralFbk((prevState) => prevState + 1);
        break;
      case "bad":
        setBadFbk((prevState) => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return goodFbk + neutralFbk + badFbk;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round(goodFbk / (countTotalFeedback() / 100));
  };
  const feedback = countTotalFeedback();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions items={data} feedback={handleFbk} />
      </Section>
      <Section title="Statistics">
        {feedback ? (
          <Statistics
            items={data}
            state={[goodFbk, neutralFbk, badFbk]}
            TotalFeedback={feedback}
            PositiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

export default App;
