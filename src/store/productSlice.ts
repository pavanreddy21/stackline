// src/store/productSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ProductData, productData } from '../data';

// Define the state type for the product slice
interface ProductState {
  data: ProductData | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ProductState = {
  data: null,
  loading: false,
  error: null,
};

// Create an async thunk for fetching product data (mock API call)
export const fetchProductData = createAsyncThunk(
  'product/fetchProductData',
  async (_, { rejectWithValue }) => {  // Use rejectWithValue for proper error handling
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Return the fetched data (in this case, our imported data)
      return productData[0]; // Assuming you only want the first product
    } catch (error:any) {
      return rejectWithValue(error.message || 'Failed to fetch product data');
    }
  }
);

// Create the product slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(fetchProductData.fulfilled, (state, action: PayloadAction<ProductData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Use the error message from rejectWithValue
      });
  },
});

export default productSlice.reducer;