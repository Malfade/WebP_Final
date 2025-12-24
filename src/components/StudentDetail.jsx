import { useParams, Link, useNavigate } from 'react-router-dom';
import students from '../data/students';

function StudentDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const student = students.find(s => s.id === parseInt(id));

    if (!student) {
        return (
            <div className="container py-5">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Student Not Found</h4>
                    <p>The student with ID {id} does not exist.</p>
                    <hr />
                    <Link to="/" className="btn btn-primary">
                        Back to Catalog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-lg">
                        <img
                            src={student.image}
                            className="card-img-top img-fluid"
                            alt={student.fullName}
                            style={{ maxHeight: '500px', objectFit: 'cover' }}
                        />
                        <div className="card-body p-4">
                            <h2 className="card-title mb-4">{student.fullName}</h2>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="detail-item mb-3">
                                        <h6 className="text-muted mb-1">ID</h6>
                                        <p className="fs-5">{student.id}</p>
                                    </div>

                                    <div className="detail-item mb-3">
                                        <h6 className="text-muted mb-1">Group</h6>
                                        <p className="fs-5">{student.group}</p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="detail-item mb-3">
                                        <h6 className="text-muted mb-1">Year of Study</h6>
                                        <p className="fs-5">Year {student.year}</p>
                                    </div>

                                    <div className="detail-item mb-3">
                                        <h6 className="text-muted mb-1">GPA Score</h6>
                                        <p className="fs-5">
                                            <span className="badge bg-success fs-6">
                                                {student.gpa.toFixed(1)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                                <button
                                    className="btn btn-primary btn-lg px-4"
                                    onClick={() => navigate('/')}
                                >
                                    ◄ BACK TO LIST
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDetail;
