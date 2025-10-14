import { useEffect, useState } from "react";

export default function Lessons() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/lessons")
      .then((res) => res.json())
      .then(setLessons);
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-600 mb-4">Lecciones</h2>
      <ul className="space-y-4">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="bg-white shadow p-4 rounded-xl">
            <h3 className="text-xl font-bold">{lesson.title}</h3>
            <p>{lesson.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
