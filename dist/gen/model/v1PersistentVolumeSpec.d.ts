/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.9
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { V1AWSElasticBlockStoreVolumeSource } from './v1AWSElasticBlockStoreVolumeSource';
import { V1AzureDiskVolumeSource } from './v1AzureDiskVolumeSource';
import { V1AzureFilePersistentVolumeSource } from './v1AzureFilePersistentVolumeSource';
import { V1CSIPersistentVolumeSource } from './v1CSIPersistentVolumeSource';
import { V1CephFSPersistentVolumeSource } from './v1CephFSPersistentVolumeSource';
import { V1CinderPersistentVolumeSource } from './v1CinderPersistentVolumeSource';
import { V1FCVolumeSource } from './v1FCVolumeSource';
import { V1FlexPersistentVolumeSource } from './v1FlexPersistentVolumeSource';
import { V1FlockerVolumeSource } from './v1FlockerVolumeSource';
import { V1GCEPersistentDiskVolumeSource } from './v1GCEPersistentDiskVolumeSource';
import { V1GlusterfsPersistentVolumeSource } from './v1GlusterfsPersistentVolumeSource';
import { V1HostPathVolumeSource } from './v1HostPathVolumeSource';
import { V1ISCSIPersistentVolumeSource } from './v1ISCSIPersistentVolumeSource';
import { V1LocalVolumeSource } from './v1LocalVolumeSource';
import { V1NFSVolumeSource } from './v1NFSVolumeSource';
import { V1ObjectReference } from './v1ObjectReference';
import { V1PhotonPersistentDiskVolumeSource } from './v1PhotonPersistentDiskVolumeSource';
import { V1PortworxVolumeSource } from './v1PortworxVolumeSource';
import { V1QuobyteVolumeSource } from './v1QuobyteVolumeSource';
import { V1RBDPersistentVolumeSource } from './v1RBDPersistentVolumeSource';
import { V1ScaleIOPersistentVolumeSource } from './v1ScaleIOPersistentVolumeSource';
import { V1StorageOSPersistentVolumeSource } from './v1StorageOSPersistentVolumeSource';
import { V1VolumeNodeAffinity } from './v1VolumeNodeAffinity';
import { V1VsphereVirtualDiskVolumeSource } from './v1VsphereVirtualDiskVolumeSource';
/**
* PersistentVolumeSpec is the specification of a persistent volume.
*/
export declare class V1PersistentVolumeSpec {
    /**
    * AccessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
    */
    'accessModes'?: Array<string>;
    'awsElasticBlockStore'?: V1AWSElasticBlockStoreVolumeSource;
    'azureDisk'?: V1AzureDiskVolumeSource;
    'azureFile'?: V1AzureFilePersistentVolumeSource;
    /**
    * A description of the persistent volume\'s resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
    */
    'capacity'?: {
        [key: string]: string;
    };
    'cephfs'?: V1CephFSPersistentVolumeSource;
    'cinder'?: V1CinderPersistentVolumeSource;
    'claimRef'?: V1ObjectReference;
    'csi'?: V1CSIPersistentVolumeSource;
    'fc'?: V1FCVolumeSource;
    'flexVolume'?: V1FlexPersistentVolumeSource;
    'flocker'?: V1FlockerVolumeSource;
    'gcePersistentDisk'?: V1GCEPersistentDiskVolumeSource;
    'glusterfs'?: V1GlusterfsPersistentVolumeSource;
    'hostPath'?: V1HostPathVolumeSource;
    'iscsi'?: V1ISCSIPersistentVolumeSource;
    'local'?: V1LocalVolumeSource;
    /**
    * A list of mount options, e.g. [\"ro\", \"soft\"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
    */
    'mountOptions'?: Array<string>;
    'nfs'?: V1NFSVolumeSource;
    'nodeAffinity'?: V1VolumeNodeAffinity;
    /**
    * What happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
    */
    'persistentVolumeReclaimPolicy'?: string;
    'photonPersistentDisk'?: V1PhotonPersistentDiskVolumeSource;
    'portworxVolume'?: V1PortworxVolumeSource;
    'quobyte'?: V1QuobyteVolumeSource;
    'rbd'?: V1RBDPersistentVolumeSource;
    'scaleIO'?: V1ScaleIOPersistentVolumeSource;
    /**
    * Name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
    */
    'storageClassName'?: string;
    'storageos'?: V1StorageOSPersistentVolumeSource;
    /**
    * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec. This is a beta feature.
    */
    'volumeMode'?: string;
    'vsphereVolume'?: V1VsphereVirtualDiskVolumeSource;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
