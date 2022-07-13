import React from "react";

// props:
// - isOpen (boolean): dùng để quyết định modal giỏ hàng có được hiển thị hay không
// - onClose (function): dùng để tắt modal
const Cart = ({ isOpen = false, onClose }) => {
  return (
    <>
      <div
        style={{ display: isOpen ? "block" : "none" }}
        class="modal fade show"
        tabindex="-1"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Product Cart</h5>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && <div class="modal-backdrop fade show"></div>}
    </>
  );
};

export default Cart;
