import { Component, Property } from '@wonderlandengine/api';

/**
 * buttonClicker
 */
export class buttonClicker extends Component {
    static TypeName = 'buttonClicker';

    static Properties = {
        button: Property.object(),
        text: Property.object()
    };

    start() {
        if (!this.button || !this.text) return;

        // Text starts inactive
        this.text.active = false;

        const cursorTarget = this.button.getComponent('cursor-target');

        if (!cursorTarget) {
            console.warn('buttonClicker: Button has no CursorTarget component');
            return;
        }

        // Use onDown instead of onClick for VR reliability
        cursorTarget.onDown.add(() => {
            this.text.active = !this.text.active;
            console.log('Button clicked, text active?', this.text.active);
        });
    }

    update(dt) {}
}
