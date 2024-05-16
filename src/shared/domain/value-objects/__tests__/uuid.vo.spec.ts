import { InvalidUuidError, Uuid } from '../uuid.vo'
import { validate as uuidValidate, validate } from 'uuid'
describe('Uuid Unit Tests', () => {
    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

    test('should throw error when uuid is invalid', () => {
        expect(() => {
            new Uuid('invalid-uuid')
        }).toThrow(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })

    test('should create a valid uuid', () => {
        const uuid = new Uuid();
        expect(uuid.id).toBeDefined();
        expect(uuidValidate(uuid.id)).toBeTruthy()
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })

    test('should accept a valid uuid', () => {
        const uuid = new Uuid('661c625d-b900-495f-b249-6b9e8ad67634');
        expect(uuid.id).toBe('661c625d-b900-495f-b249-6b9e8ad67634')
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })
})