import { z } from 'zod';
import { bloodGroup } from '../../../constants/bloodGroup';
import { gender } from '../../../constants/gender';

const createAdminZodSchema = z.object({
  body: z.object({
    employeeId: z.string(),
    email: z.string(),
    password: z.string().optional(),
    fullName: z.object({
      firstName: z
        .string({
          required_error: 'First name is required',
        })
        .nonempty(),

      lastName: z
        .string({
          required_error: 'Last name is required',
        })
        .nonempty(),

      middleName: z.string().optional(),
    }),

    gender: z.enum([...gender] as [string, ...string[]], {
      required_error: 'Gender is required',
    }),

    dateOfBirth: z
      .string({
        required_error: 'Date of birth is required',
      })
      .nonempty(),

    contactNo: z
      .string({
        required_error: 'Contact number is required',
      })
      .nonempty(),

    alternativeContactNo: z
      .string({
        required_error: 'Alternative contact number is required',
      })
      .nonempty(),

    presentAddress: z
      .string({
        required_error: 'Present address is required',
      })
      .nonempty(),

    permanentAddress: z
      .string({
        required_error: 'Permanent address is required',
      })
      .nonempty(),

    bloodGroup: z
      .enum([...bloodGroup] as [string, ...string[]], {
        required_error: 'Blood group is required',
      })
      .optional(),

    designation: z.string().optional(),

    department: z
      .string({
        required_error: 'Department faculty is required',
      })
      .nonempty(),
  }),
});

const createViewerZodSchema = z.object({
  body: z.object({
    employeeId: z.string().optional(),
    email: z.string(),
    password: z.string().optional(),
    fullName: z.object({
      firstName: z
        .string({
          required_error: 'First name is required',
        })
        .nonempty(),

      lastName: z
        .string({
          required_error: 'Last name is required',
        })
        .nonempty(),

      middleName: z.string().optional(),
    }),

    gender: z.enum([...gender] as [string, ...string[]], {
      required_error: 'Gender is required',
    }),

    dateOfBirth: z
      .string({
        required_error: 'Date of birth is required',
      })
      .nonempty(),

    contactNo: z
      .string({
        required_error: 'Contact number is required',
      })
      .nonempty(),

    alternativeContactNo: z
      .string({
        required_error: 'Alternative contact number is required',
      })
      .nonempty(),

    presentAddress: z
      .string({
        required_error: 'Present address is required',
      })
      .nonempty(),

    permanentAddress: z
      .string({
        required_error: 'Permanent address is required',
      })
      .nonempty(),

    bloodGroup: z
      .enum([...bloodGroup] as [string, ...string[]], {
        required_error: 'Blood group is required',
      })
      .optional(),

    designation: z.string().optional(),

    department: z
      .string({
        required_error: 'Department faculty is required',
      })
      .nonempty(),
  }),
});

const updateUserZodSchema = z.object({
  body: z.object({
    fullName: z
      .object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        middleName: z.string().optional(),
      })
      .optional(),

    dateOfBirth: z.string().optional(),

    gender: z.string().optional(),

    bloodGroup: z.string().optional(),

    email: z.string().email().optional(),

    contactNo: z.string().optional(),

    emergencyContactNo: z.string().optional(),

    presentAddress: z.string().optional(),

    permanentAddress: z.string().optional(),

    department: z.string().optional(),

    designation: z.string().optional(),

    profileImage: z.string().optional(),
  }),
});

export const UserValidation = {
  createAdminZodSchema,
  createViewerZodSchema,
  updateUserZodSchema,
};
