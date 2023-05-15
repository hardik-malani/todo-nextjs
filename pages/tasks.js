"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const tasks = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      startTime: "16:00",
      endTime: "17:00",
      task: "Prepare dinner",
    },
    {
      id: 2,
      startTime: "17:00",
      endTime: "18:00",
      task: "Eat dinner",
    },
    {
      id: 3,
      startTime: "18:00",
      endTime: "19:00",
      task: "Take a walk",
    },
    {
      id: 4,
      startTime: "19:00",
      endTime: "20:00",
      task: "Read a book",
    },
    {
      id: 5,
      startTime: "20:00",
      endTime: "21:00",
      task: "Watch a movie",
    },
    {
      id: 6,
      startTime: "21:00",
      endTime: "22:00",
      task: "Do some yoga",
    },
    {
      id: 7,
      startTime: "22:00",
      endTime: "23:00",
      task: "Take a shower",
    },
    {
      id: 8,
      startTime: "23:00",
      endTime: "00:00",
      task: "Listen to music",
    },
    {
      id: 9,
      startTime: "00:00",
      endTime: "01:00",
      task: "Sleep",
    },
    {
      id: 10,
      startTime: "01:00",
      endTime: "02:00",
      task: "Dream",
    },
    {
      id: 11,
      startTime: "02:00",
      endTime: "03:00",
      task: "Deep sleep",
    },
  ]);


  useEffect(() => {
    
    localStorage.setItem('todo', JSON.stringify(todo));
  });

  const localStorageData = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('todo'));
  useEffect(()=>{
    setTodo(localStorageData)
  },[])

  return (
    <div className="h-screen flex flex-col items-center ">
      <h1 className="font-bold text-3xl py-9">Schedule</h1>
      {todo.map((item) => (
        <Link className="w-full" key={item.id} href={`/tasks/${item.id}`}>
          <div className="flex flex-col sm:flex-row my-5 border-2 border-gray-400 sm:w-[50%] sm:mx-10 rounded-md">
            <div className="flex text-gray-400 sm:pl-0 sm:border-r-2 border-gray-900 px-5">
              <p>{item.startTime}:</p>
              <p>{item.endTime}</p>
            </div>
            <p className="px-5">{item.task}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};


export default tasks;
