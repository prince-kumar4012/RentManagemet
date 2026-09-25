import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/response.util.js';
import {
  listProperties,
  getPropertyById,
  createPropertyListing,
  verifyPropertyInspection
} from '../services/property.service.js';

export const getProperties = asyncHandler(async (req, res) => {
  const properties = await listProperties(req.query);
  return ApiResponse.success(res, 'Properties fetched successfully', properties, 200);
});

export const getOneProperty = asyncHandler(async (req, res) => {
  const property = await getPropertyById(req.params.id);
  if (!property) {
    return ApiResponse.error(res, 'Property not found', 404);
  }
  return ApiResponse.success(res, 'Property details fetched successfully', property, 200);
});

export const createProperty = asyncHandler(async (req, res) => {
  const property = await createPropertyListing(req.body, req.user.id);
  return ApiResponse.success(res, 'Property listing submitted successfully for verification', property, 201);
});

export const verifyInspection = asyncHandler(async (req, res) => {
  const { propertyId, healthCheck, photosCaptured, walkthroughVideo, status, notes } = req.body;
  if (!propertyId) {
    return ApiResponse.error(res, 'Property ID is required for verification', 400);
  }

  const result = await verifyPropertyInspection(propertyId, req.user.id, req.body);
  return ApiResponse.success(res, 'Property verification inspection completed and published', result, 200);
});

export default {
  getProperties,
  getOneProperty,
  createProperty,
  verifyInspection
};
