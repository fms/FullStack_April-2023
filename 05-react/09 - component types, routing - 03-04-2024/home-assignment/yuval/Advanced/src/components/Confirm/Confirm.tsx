interface ConfirmProps {
    onConfirm: () => void;
    onCancel: () => void;
}

export default function Confirm({ onConfirm, onCancel }: ConfirmProps) {
    return (
        <div>
            <p>Leaving would result in data loss</p>
            <button onClick={onConfirm}>I understand - continue navigating to home.</button>
            <button onClick={onCancel}>No, go back - stay on the settings page.</button>
        </div>
    );
}