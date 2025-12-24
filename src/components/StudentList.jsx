import { useState } from 'react';
import StudentCard from './StudentCard';
import students from '../data/students';

function StudentList() {
    const [visibleCount, setVisibleCount] = useState(10);

    const handleSeeMore = () => {
        setVisibleCount(20);
    };

    const visibleStudents = students.slice(0, visibleCount);
    const hasMore = visibleCount < students.length;

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">✨ Student Catalog 2025</h1>
                <p className="lead">Discover our talented and ambitious students</p>
            </div>

            <div className="row">
                {visibleStudents.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>

            {hasMore && (
                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary btn-lg px-5"
                        onClick={handleSeeMore}
                    >
                        See More
                    </button>
                </div>
            )}

            {!hasMore && visibleCount > 10 && (
                <div className="text-center mt-4">
                    <p className="text-muted">All students displayed</p>
                </div>
            )}
        </div>
    );
}

export default StudentList;
