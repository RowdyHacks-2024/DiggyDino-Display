import React from 'react';
import {  gql, TypedDocumentNode } from '@apollo/client';


interface Detector {
    detector_id: string;
    detector_name: string;
}

interface DetectorData {
    Detector: Detector[];
}
  
interface DetectorVars {
    user_id: string;
}

export const GET_USER_DETECTORS: TypedDocumentNode<DetectorData, DetectorVars> = gql`
    query getUserDetectors($user_id: string) {
        Detector(user_id: $user_id) {
            detector_id
            detector_name
        }
    }
`;