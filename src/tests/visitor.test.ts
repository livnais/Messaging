import MessageColorFilter from '../models/visitor/message-bold-filter';
import MessageBoldFilter from '../models/visitor/message-color-filter';
import MessageItalicFilter from '../models/visitor/message-italic-filter';
import MessageLinkFilter from '../models/visitor/message-link-filter';

test('Visitor message bold filter', () => {
    const message = new MessageBoldFilter();
    expect(message.appliquer('bold')).toBe('MessageBoldFilter bold');
});
test('Visitor message color filter', () => {
    const message = new MessageColorFilter();
    expect(message.appliquer('color')).toBe('MessageColorFilter color');
});
test('Visitor message link filter', () => {
    const message = new MessageLinkFilter();
    expect(message.appliquer('link')).toBe('MessageLinkFilter link');
});
test('Visitor message italic filter', () => {
    const message = new MessageItalicFilter();
    expect(message.appliquer('italic')).toBe('MessageItalicFilter italic');
});
