import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import * as patientDto from './patient.dto.js';
import { AuthGuard } from '../../services/auth/auth.guard.js';

@Controller('patients')
export class PatientsController {

    @Get()
    getAllPatients() {
        // Logic to retrieve all patients
    }

    @Get(':id')
    getPatientById(@Param('id') id: string) {
        // Logic to retrieve a patient by ID
    }

    @Post()
    createPatient(@Body() createPatientDto: patientDto.PatientDto) {
        // Logic to create a new patient
    }

    @Put(':id')
    updatePatient(@Param('id') id: string, @Body() updatePatientDto: any) {
        // Logic to update an existing patient
    }

    @Delete(':id')
    deletePatient(@Param('id') id: string) {
        // Logic to delete a patient by ID
    }
}
