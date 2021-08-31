const rules = {
  username: {
    required: { value: true, message: 'Username tidak boleh kosong' },
    maxLength: { value: 20, message: 'Panjang username maksimal 30 karakter' },
    minLength: { value: 3, message: 'Panjang username minimal 3 karakter' },
  },
  notable: {
    required: { value: true, message: 'nomor meja tidak boleh kosong' },
    maxLength: { value: 3, message: 'nomor meja tidak sesuai' },
  },
};

export { rules };
