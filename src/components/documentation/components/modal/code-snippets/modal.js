const modal = `
    <div class="modal-bg" id="modal1">
        <div class="modal">
            <div class="flex flex-column flex-gap-1">
                <h3 class="text-size-2">Modal Title</h3>
                <p>Hey I am a modal. You see me. Look closely. I am perfect</p>
                <div class="align-self-end">
                    <button onclick="closeModal('modal1')" class="btn-solid primary mr-sm">Accept</button>
                    <button onclick="closeModal('modal1')" class="btn-solid secondary">Close</button>
                </div>
            </div>
        </div>
    </div>
    <button onclick="openModal('modal1')" modal-id='modal1' class="btn-solid primary">Live Demo Modal</button> 
`

export default modal;