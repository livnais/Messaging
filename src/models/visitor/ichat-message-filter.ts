export default interface IChatMessageFilter {
    appliquer(message: Object): string;
}
