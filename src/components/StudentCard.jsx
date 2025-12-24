import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function StudentCard({ student }) {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <Link to={`/students/${student.id}`} className="text-decoration-none">
                <div className="card h-100 student-card">
                    <img
                        src={student.image}
                        className="card-img-top"
                        alt={student.fullName}
                        style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title text-dark">{student.fullName}</h5>
                        <div className="card-text">
                            <p className="mb-2 text-muted">
                                <strong>▸ Group:</strong> {student.group}
                            </p>
                            <p className="mb-2 text-muted">
                                <strong>▸ Year:</strong> {student.year}
                            </p>
                            <p className="mb-0 text-muted">
                                <strong>▸ GPA:</strong> {student.gpa.toFixed(1)}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

StudentCard.propTypes = {
    student: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        group: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        gpa: PropTypes.number.isRequired,
    }).isRequired,
};

export default StudentCard;
