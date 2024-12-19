import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTips, likeTip ,deleteTip} from "../Features/TipSlice";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { FaTrash, FaHeart, FaPlus } from "react-icons/fa";
import moment from "moment"; 

import "./Card.css";

function PreventionTips() {
  const tips = useSelector((state) => state.tips.tips || []);
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expandedTipId, setExpandedTipId] = useState(null);

  useEffect(() => {
    dispatch(getTips());
  }, [dispatch]);

  const toggleDetails = (id) => {
    setExpandedTipId(expandedTipId === id ? null : id);
  };

  const handleLikeTip = (tipId) => {
    const tipData = {
      tipId,
      userId: user._id,
    };
    dispatch(likeTip(tipData));
    navigate("/preventionTips");
  };
   
  // Handle delete action
  const handleDelete = (tipId) => {
    if (window.confirm("Are you sure you want to delete this Tip?")) {
      dispatch(deleteTip(tipId));  // Dispatch the deleteUser action
    }
  };
  return (
    <div className="postsContainer">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Prevention Tips</h1>
        {user?.type === "A" && (
          <Link to="/addTip">
            <Button color="primary" className="d-flex align-items-center">
              <FaPlus className="me-2" /> Add Tip
            </Button>
          </Link>
        )}
      </div>

      {tips.length > 0 ? (
        <div className="tips-cards">
          {tips.map((tip, index) => (
            <Card key={tip._id} className="mb-3">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <CardTitle tag="h5">
                      <span className="me-2">{index + 1}.</span> {tip.preventionTip}
                    </CardTitle>
                    <p className="text-muted small mb-0">
                      {moment(tip.createdAt).fromNow()}
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="likes me-3 mb-0">
                      <Link onClick={() => handleLikeTip(tip._id)}>
                        <FaHeart className="text-danger me-1" />
                      </Link>
                      ({tip.likes.count})
                    </p>
                    {user?.type === "A" && (
                      <div>

                        <button
                          onClick={() => handleDelete(tip._id)}
                          className="btn btn-danger"
                          style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                        >
                          <FaTrash size={20} style={{ color: 'black' }} /> 
                      </button>
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  color="info"
                  size="sm"
                  onClick={() => toggleDetails(tip._id)}
                  className="mt-3"
                >
                  {expandedTipId === tip._id ? "Hide Details" : "More Details"}
                </Button>
                {expandedTipId === tip._id && (
                  <div className="mt-3">
                    <CardText>
                      <strong>Why It's Important:</strong> {tip.whyItIsImportant}
                    </CardText>
                    <CardText>
                      <strong>How to Apply:</strong> {tip.howToApply}
                    </CardText>
                    <CardText>
                      <strong>Who Can Help:</strong> {tip.whoCanHelp}
                    </CardText>
                  </div>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      ) : (
        <p>No tips available...</p>
      )}
    </div>
  );
}

export default PreventionTips;
