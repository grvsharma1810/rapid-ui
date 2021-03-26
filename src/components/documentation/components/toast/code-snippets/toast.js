const toast = `
    <button class="btn-solid bg-success" onClick={() => showToast("toast-success")}>Show Success Toast</button>
    <div class="toast" id="toast-success">
        <div class="bg-success">I am a success toast</div>
    </div>

    <button class="btn-solid bg-failure" onClick={() => showToast("toast-failure")}>Show Error Toast</button>
    <div class="toast" id="toast-failure">
        <div class="bg-failure">I am a error toast</div>
    </div>
`

export default toast;