"use client";
import { generateQuiz } from "@/actions/interview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useFetch from "@/hooks/use-fetch";
import { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const {
    loading: generatingQuiz,
    fn: generateQuizfn,
    data: quizData,
  } = useFetch(generateQuiz);

  if (!quizData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Ready to test your knowledge?</CardTitle>
          
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This quiz contains 10 questions specific to your industry and skills. Take your time and choose the best answer for each question.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Start Quiz</Button>
        </CardFooter>
      </Card>
    );
  }

  return <div>Quiz Component</div>;
};
export default Quiz;
